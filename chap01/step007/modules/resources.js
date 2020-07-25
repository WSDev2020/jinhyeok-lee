const fs   = require('fs');
const path = require('path');

const rout = require('../rout').router();

const dir = path.join(__dirname, '../');

var regx = /\/resources\/(.*)\.(.*)$/;

const mimeType = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

console.log(path.resolve(__dirname));
rout.get('/**', (req, res)=>{
    
    var matchedPath = req.urls.path.match(regx);
    
    if(matchedPath) { // 경로 매칭

        var fp    = matchedPath[1]; // ::path
        var exp   = matchedPath[2]; // ::file_exp

        var fname = fp + '.' + exp; // ::file_full_path

        var file = path.join(dir, fname);

        var type = mimeType[exp] || 'text/plain';

        var s = fs.createReadStream(file);

        s.on('open', function () {
            res.statusCode = 200;
            res.setHeader('Content-Type', type);
            s.pipe(res);
        });

        s.on('error', function (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found Exception');
        });

    } else{

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found Exception');
    }
});

module.exports = rout;