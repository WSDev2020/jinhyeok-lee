// useful module resolver [[ find them modules at express.Router ]]
const routerResolver = require('./router-resolver');

var routDefinition = [];

function createRouter(port, host, callback) {
    
    /**
     * <strong>declare @Router definition</strong>
     * use for compose the routers [[ Array ]]
     */
    var routingDefinition = { 
            "router"   : [],
            "routers"  : [],
            "host"     : host,
            "port"     : port,
            "callback" : callback||(() => sys.debug(`${gs.get(types.logColor).green('server is runnig at')} http://${host}:${port}`)),
        };

        routDefinition.push( routingDefinition );

    // new object[Proxyed]
    var newObject = objectFactory.new();

    ((newObject) => {

        /** appending router on [[ @Difinition ]] */
        newObject['addRouter']  = addRouter_arg2;
        newObject['addRouter']  = addRouter_arg3;
        newObject['addRouter']  = addRouter_arg4;
        
        /** appending routers(file or directory) on [[ @Difinition ]] */
        newObject['addRouters'] = addRouters_arg1;
        newObject['addRouters'] = addRouters_arg2;
        newObject['addRouters'] = addRouters_arg3;

        /** external express registration */
        newObject['express']    = express;
        
        /** external path registration */
        newObject['path']       = path_arg1;
        newObject['path']       = path_arg2;

        /** 3rd party lib registration */
        newObject['use']        = add_use_arg1;
        newObject['use']        = add_use_arg2;
        newObject['use']        = add_use_arg3;
        newObject['use']        = add_use_arg4;
        newObject['uses']       = add_uses_arglist;

        /** view template now impliments [ pug, ] */
        newObject['view']       = add_view_arg1;
        newObject['view']       = add_view_arg2;

        /** static resource registration */
        newObject['resources']  = resources_arg1;
        newObject['resources']  = resources_arg2;
        
        /** build routers use [[ routDefinition ]] */
        newObject['build']      = build;

    })(newObject);

    
    /**
     * using the <b> express </b> that is all set, open 
     * the router to finish getting ready to 
     * <strong> receive requests. </strong>
     */
    function build() {

        var mExpress = routingDefinition.express;
        var mApp     = routingDefinition.app;
        
        /** 
         * require [[ express ]] and [[ app ]],  
         * if it is not exist raise exception message 
         */
        if(!mApp) {
            try{
                mExpress = require('express');
                mApp     = mExpress();
            }catch(e){
                throw new Error('couldn\'t find any [express] to handle the router.');
            }
        }

        const mPath     = routingDefinition.path||'/';
        const mToPath   = routingDefinition.toPath||'/';
        const mPort     = routingDefinition.port;
        const mHost     = routingDefinition.host;
        const mCallback = routingDefinition.callback;
        const mRouter   = routingDefinition.router;
        const mRouters  = routingDefinition.routers;
        
        // router registration
        for(rout of mRouter) {
            
            const redirectPath = [mPath, rout.path].join('').replace('//', '/');
            
            sys.log(`${gs.get(types.logColor).blue('[[ Routing ]]')} url : '${redirectPath}',  methods : ${rout.method.join(',')}`);

            if(rout.method.includes('ALL')) mApp.all(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('GET')) mApp.get(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('POST')) mApp.post(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('HEAD')) mApp.head(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('PUT')) mApp.put(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('OPTIONS')) mApp.options(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('DELETE')) mApp.delete(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('CONNECT')) mApp.connect(redirectPath, _proxy(rout.filter, rout.callback));

            else if(rout.method.includes('TRACE')) mApp.trace(redirectPath, _proxy(rout.filter, rout.callback));
        }

        var cChachedRouter = [];

        // routers registration [[ bind path ]]
        for(routs of mRouters) {

            const aRouterLst = routerResolver.resolve(routs);
            const sBindPath  = routs.path ? routs.path : '/';
            const oOptions   = routs.options || {};

            const bRepeat    = oOptions.repeat || false;

            for(rt of aRouterLst) {

                if(rt.pk === '$rtr') {
                    
                    if(cChachedRouter.includes(rt.id)) {
                        
                        if(bRepeat) {
                            
                            mApp.use(sBindPath, rt);

                            sys.log(`${gs.get(types.logColor).blue('[[ Routing ]]')} url : '${sBindPath}' file : ${rt.file}`);
                        }

                    } else {

                        mApp.use(sBindPath, rt);

                        sys.log(`${gs.get(types.logColor).blue('[[ Routing ]]')} url : '${sBindPath}' file : ${rt.file}`);

                        cChachedRouter.push(rt.id)
                    }
                }
            }
        }

        /**
         * Strategies for using a proxy to process targets
         * @param {Function} f_1 proxy function
         * @param {Function} f_2 target function
         */
        function _proxy(f_1, f_2) {

            return (req, res) => {
                if(f_1(req, res)) 
                    f_2(req, res);
            }
        }
        
        /** application open */
        mApp.listen(mPort, mHost, mCallback);

        // return loaded application
        return mApp;
    }


    /**
     * <b> Handles the function </b> of registering 
     * general information for creating <strong>a router.</strong>
     * @param {String} path 
     * @param {Array} method method Types
     * @param {Function} filterCallback
     * @param {Function} callback 
     */
    function addRouter_arg2 (path, callback) {
        
        return addRouter_arg3 (path, ['ALL'], callback);
    }

    function addRouter_arg3 (path, method, callback) {
        
        if(typeof method == 'string') {
            method = [ method ];
        }

        return addRouter_arg4 (path, method, ()=>true, callback);
    }

    function addRouter_arg4 (path, method, filterCallback, callback) {
        
        routingDefinition.router.push({
            "path"     : path,
            "method"   : method,
            "filter"   : filterCallback,
            "callback" : callback,
        });

        return newObject;
    }

    /**
     * @param {*} arg1 file [[ path(absolute) ]]
     * @param {*} arg2 bind [[ path ]]
     * @param {*} arg3 [[ options ]] Register options to add when registering the router. 
     *                               Registerable options will be added.
     *                               Currently repeat(true, false) deafult [[ false ]]
     */
    function addRouters_arg1 (arg1) {

        return addRouters_arg2 (arg1, null);
    }
    function addRouters_arg2 (arg1, arg2) {

        return addRouters_arg3 (arg1, arg2, null);
    }

    function addRouters_arg3 (arg1, arg2, arg3) {
        
        routingDefinition.routers.push({
            "file"    : arg1 ,
            "path"    : arg2 ,
            "options" : arg3 ,
        });

        return newObject;
    }

    /**
     * register and append express 
     * and application (for << rout module >>).
     * @param {Express} express express application
     */
    function express(express) {

        routingDefinition.express = express;
        routingDefinition.app     = express();

        return newObject;
    }

    /**
     * Specifies the <b> top-level </b> path 
     * for express processing.
     * @param {String} path resolve path
     * @param {String} toPath bind path
     */
    function path_arg1(path) {
        
        path_arg2(path, path);
    }

    function path_arg2(path, toPath) {

        routingDefinition.path   = path;
        routingDefinition.toPath = toPath;
    }

    /**
     * extension function to use or uses << list >>
     * 3rd party library (It is designed to process up to 4 parameters)
     * @param {*} arg1 argument [[ first ]]
     * @param {*} arg2 argument [[ second ]]
     * @param {*} arg3 argument [[ third ]]
     * @param {*} arg4 argument [[ fourth ]]
     */
    function add_use_arg1(arg1) {

        if(!routingDefinition.app)
            throw new Error('couldn\'t find any [express] to handle the router.');

        routingDefinition.app.use(arg1);

        return newObject;
    }

    function add_use_arg2(arg1, arg2) {

        if(!routingDefinition.app)
            throw new Error('couldn\'t find any [express] to handle the router.');

        routingDefinition.app.use(arg1, arg2);

        return newObject;
    }

    function add_use_arg3(arg1, arg2, arg3) {
        
        if(!routingDefinition.app)
            throw new Error('couldn\'t find any [express] to handle the router.');

        routingDefinition.app.use(arg1, arg2, arg3);

        return newObject;
    }

    function add_use_arg4(arg1, arg2, arg3, arg4) {

        if(!routingDefinition.app)
            throw new Error('couldn\'t find any [express] to handle the router.');

        routingDefinition.app.use(arg1, arg2, arg3, arg4);

        return newObject;
    }

    function add_uses_arglist(...args) {
        
        for(arg of args) {

            add_use_arg1(arg);
        }

        return newObject;
    }

    /**
     * Function 
     * to register configuration information 
     * to create a <strong> resource </strong>
     * @param {Array} arg1 resource rule set 
     * @param {String} arg2 seperator DEFAULT ":"
     */
    function resources_arg1 (arg1) {
        return resources_arg2(arg1, ':');
    }

    function resources_arg2 (arg1, arg2) {

        const mBaseDir = gs.get(types.baseDir)
            , mExpress = gs.get(types.express)
            , mPath    = gs.get(types.path)
            ;

        for(e of arg1) {

            const aResource     = e.split(arg2);
            const sResovledPath = aResource[0];
            const sRedirectPath = aResource[1] ? aResource[1] : '/';

            sys.debug(`${gs.get(types.logColor).red('[[ Resources ]]')} directory : ${sRedirectPath} ${gs.get(types.logColor).green('==>')} ${sResovledPath} `);

            add_use_arg2(sRedirectPath, mExpress.static(mPath.join(mBaseDir,sResovledPath)));
        }

        return newObject;
    }

    /**
     * add middleware to render the view 
     * using the view template.
     * @param {String} arg1 view type
     * @param {String} arg2 view directory path
     */
    function add_view_arg1 (arg1) {

        return add_view_arg2(arg1, '/views');
    }
    
    function add_view_arg2 (arg1, arg2) {

        if(arg1) {

            routingDefinition.app.set('view engine', arg1);
            
            routingDefinition.app.set('views', gs.get(types.path).join(gs.get(types.baseDir), arg2));

            routingDefinition.app.locals.basedir = gs.get(types.baseDir);
            
            routingDefinition.app.set('view options', { basedir: gs.get(types.baseDir)})
        }

        return newObject;
    }

    return newObject;
}


module.exports = {
    createRouter  : createRouter,
}
