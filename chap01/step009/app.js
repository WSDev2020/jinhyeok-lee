const express = require('express');
const path    = require('path');
const home    = require('./modules/home');
const index   = require('./modules/index');

const app   = express();
const port  = 42700;

// 라우팅 모듈 처리
app.use('/home' , home);
app.use('/index', index);

// 정적 리소스 처리
app.use('/resources', express.static(path.join(__dirname, '/public')));

// 라우팅 처리
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('index page');
});

app.listen(port, (req, res) => {
    console.log(`runnig at http://127.0.0.1:${port}`);
});