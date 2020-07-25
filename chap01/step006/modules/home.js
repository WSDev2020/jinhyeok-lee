const rout = require('../rout').router();

rout.get('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello home routing(GET)');
});

rout.post('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello home routing(POST)');
});

rout.on('/A*', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello home routing(ALL)');
});

module.exports = rout;