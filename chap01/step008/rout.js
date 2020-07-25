const http           = require('http');
const paramParser    = require('./paramParser');
const AntPathMatcher = require('ant-path-matcher');

// 파일 시스템과 경로 선언
const fs             = require('fs');
const path           = require('path');

var matcher = new AntPathMatcher();

var topNode = null;

function _start(port, callback) {

    http.createServer((req, res)=>{

        _routing(req, res);
    })
    .listen(port, '0.0.0.0', callback);
}

function _routing(req, res) {

    function _rout(resolver, req, res) {

        if(resolver.isResolve(req, res)) {
            return resolver.resolve(req, res);
        }
        
        if(resolver.next) {
            
            return _rout(resolver.next, req, res);
        } else {

            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('not found exception');
        }
    }

    _rout(topNode, req, res);
}

function _on(path, callback) {

    var newNode = {
        next      : topNode,
        resolve   : callback,
        isResolve : (req) => {
            req.urls = paramParser(req.url);

            // * attach matcher expr
            return matcher.match(path, req.urls.path);
        },
    }

    return ( topNode = newNode );
}

function _routProxy(method) {

    return function(path, fn) {

        resolver = _on(path, fn);

        var rv = resolver.isResolve;

        resolver.isResolve = (req) => {
            
            if(method.includes(req.method)) {

                return rv(req);
            } else {

                return false;
            }
        }
    }
}

function _router() {
    m = [];
    return {
        on      : (p, f)=>m.push({type : 1, path:p, func:f, method:'GET,POST'}),
        get     : (p, f)=>m.push({type : 1, path:p, func:f, method:'GET'     }),
        post    : (p, f)=>m.push({type : 1, path:p, func:f, method:'POST'    }),
        __get__ : m
    }
}

function _use(path, md) {

    var mol = md.__get__;

    const _GET  = _routProxy('GET');
    const _POST = _routProxy('POST');

    for(e in mol) {

        obj = mol[e];
        
        // module rout
        if(obj.type == 1) {
            var path = path + ( obj.path === '/' ? '' : obj.path );
            var func = obj.func;

            if(obj.method.includes('GET')) {

                _GET(path, func);
            }
            if(obj.method.includes('POST')) {

                _POST(path, func);
            }
        } 
        // resource rout
        else if (obj.type == 2) {

            var mappingPath = path + '/**';
            var func        = obj.func;

            var reverse_function = function(req, res) {

                path = path.substring(0,1) == '/' ? path.substr(1, path.length) : path;

                var regexp = new RegExp(`\/${path}\/(.*)\\.(.*)$`);

                func(req, res, regexp);
            }

            if(obj.method.includes('GET')) {

                _GET(mappingPath, reverse_function);
            }
            if(obj.method.includes('POST')) {

                _POST(mappingPath, reverse_function);
            }
        }
    }
}

function _static(baseDir) {

    m = [];

    // 리소스 서비스를 위한 정적 컨텐츠(mime) 타임
    const mimeType = {
        html: 'text/html',
        txt : 'text/plain',
        css : 'text/css',
        gif : 'image/gif',
        jpg : 'image/jpeg',
        png : 'image/png',
        svg : 'image/svg+xml',
        js  : 'application/javascript'
    };

    var dir  = path.join(__dirname, baseDir);

    function resource_service(req, res, regexp) {

        var matchedPath = req.urls.path.match(regexp);

        if(matchedPath) { // path-matching

            var fp    = matchedPath[1]; // ::path
            var exp   = matchedPath[2]; // ::file_exp

            // ::file_full_path
            var fname = fp + '.' + exp; 

            // base-dir combine
            var file = path.join(dir, fname); 

            // mimeType mapping
            var type = mimeType[exp] || 'text/plain'; 

            // stream open
            var s = fs.createReadStream(file); 
            
            // static Service
            s.on('open', function () { 
                res.statusCode = 200;
                res.setHeader('Content-Type', type);
                s.pipe(res);
            });
    
            s.on('error', function (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain');
                res.end('404 Not Found Exception');
            });
    
        } else{
    
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('not found exception');
        }
    }

    m.push({type : 2, baseDir : baseDir, func : resource_service, method : 'GET'});

    return {
        __get__ : m
    }
}

module.exports = {
     on      : _on,
     get     : _routProxy('GET'),
     post    : _routProxy('POST'),
     use     : _use, 
     start   : _start,
     router  : _router,
     static  : _static // static 외부로 노출
};