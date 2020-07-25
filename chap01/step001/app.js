// 1. http 서버를 만들기 위한 모듈을 할당
const http = require('http');

// 2. 포트와 호스트를 할당
const [ port , host ] = [42700, '127.0.0.1'];

// 3. 요청을 처리할 서버를 생성
const app = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello Web With NodeJs');
});

// 4. 서버를 실행
app.listen(port, host, ()=>{
    console.log(`runnig at http://${host}:${port}`);
});