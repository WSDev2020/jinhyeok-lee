const rout = require('../rout').router();

rout.get('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello index routing(GET)');
});

rout.post('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello index routing(POST)');
});

rout.on('/A*', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello index routing(ALL)');
});

module.exports = rout;