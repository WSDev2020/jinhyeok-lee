function paramParser(url) {

    var r = { url : url };

    var isn = url.indexOf('?');

    if(isn > -1) {
        r.path = url.substr(0, isn);
        r.params = {};

        r.params.url = url.substr(isn+1, url.length);

        var el = r.params.url.split('&');

        for(e in el) {
            var element = el[e].split('=');

            r.params[element[0]] = element[1];
        }

    } else {
        r.path   = url;
        r.params = null;
    }

    return r;
}

module.exports = paramParser;