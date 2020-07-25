const http = require('http');

// 1. 파라매터를 처리할 함수 할당
const paramParser = require('./paramParser');

const [ port , host ] = [42700, '127.0.0.1'];

// 2. 라우팅을 처리할 seeds(리졸버)를 생성
const homeResolver = {
    next      : null,
    isResolve : (req) => {
        req.urls = paramParser(req.url);

        return ( req.urls.path === '/home' );
    },
    resolve : (req,res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello home routing');
    }
}

var indexResolver = {
    next      : homeResolver,
    isResolve : (req) => {
        req.urls = paramParser(req.url);

        return ( req.urls.path === '/index' );
    },
    resolve : (req,res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello index routing');
    }
}

const app = http.createServer((req, res) => {

    function rout(resolver, req, res) {

        // 3. 라우팅 처리가 될 경우 라우팅 처리
        if(resolver.isResolve(req, res)) {
            return resolver.resolve(req, res);
        }
        
        // 다음 노드를 확인
        if(resolver.next) {
            
            // 다음 노드로 이동하여 검색
            return rout(resolver.next, req, res);
        } else {

            // 찾을 것이 없는 경우 에러 처리
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('not found exception');
        }

    }

    // 라우팅 처리
    rout(indexResolver, req, res);
});

app.listen(port, host, ()=>{
    console.log(`runnig at http://${host}:${port}`);
});