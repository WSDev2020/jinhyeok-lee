const http = require('http');
const rout = require('./rout');

const [ port , host ] = [42700, '127.0.0.1'];

const app = http.createServer((req, res) => {

    // 라우터를 모듈로 분리
    rout.routing(req, res);
});

rout.on('/index', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello index routing');
});

rout.on('/home', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello home routing');
});

app.listen(port, host, ()=>{
    console.log(`runnig at http://${host}:${port}`);
});