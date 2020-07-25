const router = require('express').Router();

router.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello index routing(GET)');
});

router.post('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello index routing(POST)');
});

module.exports = router;