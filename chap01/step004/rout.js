// 1. http 모듈의 라우터에서 위임하여 사용하고 있다.
const http        = require('http');
const paramParser = require('./paramParser');

var topNode = null;

// 서버 생성을 최상위 라우터가 맡아서 처리 한다.*
function _start(port, callback) {

    http.createServer((req, res)=>{

        // http를 위임함으로써 라우터(_routing) 기능(method)는 
        // 외부로 표출할 의무가 사라졌다.
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
    
            return ( req.urls.path === path );
        },
    }

    return ( topNode = newNode );
}

// generator module info*
function _router() {
    m = [];
    return {
        on      : (p, f)=>m.push({type : 1, path:p, func:f}),
        __get__ : m
    }
}

// module process split*
function _use(path, md) {

    var mol = md.__get__;

    for(e in mol) {

        obj = mol[e];

        // routing module(Ex)
        if(obj.type == 1) {
            
            _on(path + ( obj.path === '/' ? '' : obj.path ), obj.func);
        }
    }
}

module.exports = {
     on      : _on,
     use     : _use, 
     start   : _start,
     router  : _router
};