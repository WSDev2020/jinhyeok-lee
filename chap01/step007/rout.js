const http           = require('http');
const paramParser    = require('./paramParser');

// * 매처를 추가 하도록 한다.
const AntPathMatcher = require('ant-path-matcher');

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
    }
}

module.exports = {
     on      : _on,
     get     : _routProxy('GET'),
     post    : _routProxy('POST'),
     use     : _use, 
     start   : _start,
     router  : _router,
};