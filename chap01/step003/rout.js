const paramParser = require('./paramParser');

var topNode = null;

// 1. 라우팅 처리
function _routing(req, res) {

    function _rout(resolver, req, res) {

        // 3. 라우팅 처리가 될 경우 라우팅 처리
        if(resolver.isResolve(req, res)) {
            return resolver.resolve(req, res);
        }
        
        // 다음 노드를 확인
        if(resolver.next) {
            
            // 다음 노드로 이동하여 검색
            return _rout(resolver.next, req, res);
        } else {

            // 찾을 것이 없는 경우 에러 처리
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('not found exception');
        }

    }

    // 라우팅 처리
    _rout(topNode, req, res);
}

// 2. 이벤트 등록을 위한 팩토리(factory) 함수
//    <strong>object(객체)</strong>를 추상화하여 타입의 안정성과 확장성을 높일 수 있다.
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

module.exports = {
     routing : _routing
   , on      : _on
};