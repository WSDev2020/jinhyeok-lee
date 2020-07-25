function _preProcess(req, res, next) {

    res.parameterResolver = function(parameter) {

        const mApp = gs.get(tp.app);

        parameter.appPath = '/';
        parameter.appToc  = mApp.toc||true;
        


        

    }

    next();
}

function _postProcess(req, res, next) {


    next();    
}

module.exports = {
    preProcess  : _preProcess,
    postProcess : _postProcess,
}