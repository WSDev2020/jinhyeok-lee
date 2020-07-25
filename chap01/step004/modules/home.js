const rout = require('../rout').router();

rout.on('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello home routing');
});

module.exports = rout;