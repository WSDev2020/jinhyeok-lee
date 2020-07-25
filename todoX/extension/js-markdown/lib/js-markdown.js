const fs = require('fs');

/**
 * <strong> parse pages </strong> created with markdown 
 * to process the shared area.
 * @param {String} markdown markdown elements unsigned(text)
 */
function _markdown (markdown){

    var aLines, sSeperator, oKeys = {};

    if(markdown.includes('\n',0)){
        sSeperator = '\n';
        aLines     = markdown.split('\n');
    } else if(markdown.includes('\n',0)){
        sSeperator = '\r\n';
        aLines     = markdown.split('\r\n');
    } else {
        sSeperator = '';
        aLines = [];
    }

    var e = 0;
    var isKeyframe = isEndFrame = false;
    const mMatcher = gs.get(types.matcher);
    const toc     = [{ text : oKeys.title||'', level : 0}];

    for(;;e++) {

        const sLine = aLines[e];
        
        if(isKeyframe)
            if(mMatcher.match('-*', sLine)) isEndFrame = !isEndFrame;
            else {
                aKeys = sLine.split(':').map(e=>e.trim());
                oKeys[aKeys[0]] = aKeys[1];
            }

        if(!isKeyframe && mMatcher.match('-*', sLine)) isKeyframe = !isKeyframe;

        if ((isKeyframe && isEndFrame) || e >= aLines.length) {

            // * toc rebuild
            for(var l = e+1 ; l < aLines.length ; l++) {

                const matchedReg = aLines[l].match(new RegExp('^#+'));

                if(matchedReg) {

                    const level = matchedReg[0].length;
                    const text  = matchedReg.input;

                    toc.push({text : text, level : level});
                }
            }
            break;
        };
    }

    aLines = aLines.slice(e+1, aLines.length);
   
    return {key : oKeys, toc : _toc(toc), value : _header(oKeys).concat(gs.get(types.markdown).render(aLines.join(sSeperator)))};
};

/**
 * check the header 
 * and extract the information registered in the <b> header </b>.
 * @param {String} keyword header keyword
 */
function _header(keyword) {

    var header = '';

    if(keyword.title) header += `<h1 class="app-title" id="appTitle">${keyword.title}</h1>`;

    return header;
}

/**
 * check the [[ toc ]] 
 * and extract the information registered in the <b> header </b>.
 * @param {String} keyword header keyword
 */
function _toc(keyword) {

    var tocList = [];

    for(toc of keyword) {

        const iLevel = toc.level;

        const regExp = /id="([^"]*)"/;

        const txToc = gs.get(types.markdown).render(toc.text);

        const matchedToc = txToc.match(regExp);

        if(matchedToc) {
            const tocId = matchedToc[1];

            tocList.push({
                level : iLevel,
                toc   : txToc,
                id    : tocId,
            });

        } else {
            continue;
        }
    }
    
    return tocList;
}


/**
 * 
 * @param {String} filePath markdown page url(path)
 * @param {Function} callback post processing path
 */
function _load(filePath, callback) {

    callback = callback || ((e) => e);

    try{
        return callback(fs.readFileSync(gs.get(types.path).join(gs.get(types.baseDir), filePath), 'utf-8'));
    }catch(e) {
        return null;
    }
}



/**
 * [[ registration Middleware ]]
 * <strong> Resolve </strong> post processing on application by routed result
 * @param {Request} req requrest
 * @param {Response} res response
 * @param {Function} next next handle
 */
function _postProcess(req, res ,next){

    const mDefaultPages = {
        key : {
            title : '',
            icon  : '',
        },
        toc : null
    }

    if(res.render) {

        const _render = res.render;
        const mViewTheme = gs.get(tp.app).app.view.theme;

        res.render = function converRender (view, options, pages, callback) {

            const loadPages = { pages : _load(pages, _markdown)||mDefaultPages };
            
            options = Object.assign( options, loadPages);
            options = Object.assign( options, gs.get(tp.app).external||{} );
    
            /** << theme >> setup */
            if(options.pages){

                if(options.pages.key) {

                    if(options.pages.key.theme) {

                        options.viewTheme = options.pages.key.theme
                    } else {
                        options.viewTheme = mViewTheme;
                    }
                } else {
                    options.viewTheme = mViewTheme;
                }
            } else {
                options.viewTheme = mViewTheme;
            }

            if(res.parameterResolver) {
                if(res.parameterResolver instanceof Array) {
                    for ( var pr of res.parameterResolver) {
                        pr(options);
                    }
                } else {
                    res.parameterResolver(options);
                }
            } 

            _render.call(this, view, options, callback);
        };
    }


    next();
}

/**
 * statistical information is extracted 
 * using markdown information.
 * 
 * Basically, it is necessary to register splash text, 
 * and it *<strong> will </strong> be expanded as 
 * an [[ option ]] later.
 * 
 * @param {String} markdown markdown texts
 */
function _analytics(markdown) {

    const mMatcher = gs.get(types.matcher) 
        , aLines   = markdown.split(/\r{0,1}\n/)
        , oKeys    = {}
        ;
    var e = 0;
    var isKeyframe = isEndFrame = false;

    for(;;e++) {

        const sLine = aLines[e] || '';
        
        if(isKeyframe)

            if(mMatcher.match('-*', sLine)) isEndFrame = !isEndFrame;

            else {
                aKeys = sLine.split(':').map(e=>e.trim());

                oKeys[aKeys[0]] = aKeys[1];
            }
        if(!isKeyframe && mMatcher.match('-*', sLine)) isKeyframe = !isKeyframe;

        if ((isKeyframe && isEndFrame) || e >= aLines.length) {
            // cache splash text
            var splashLine = 0;

            for(var v = e+1 ; v < aLines.length ; v++ ) {

                const splash = aLines[v];

                splashLine += splash.length;

                oKeys.splash = (oKeys.splash||'').concat(splash);

                if(splashLine > 200) break;
            }
            break;
        }
    }

    oKeys.splash = gs.get(types.markdown)
                     .render(oKeys.splash.replace('#','') || '');

    return oKeys;
}

module.exports = {
    markdown    : _markdown,
    load        : _load,
    postProcess : _postProcess,
    analytics   : _analytics,
}