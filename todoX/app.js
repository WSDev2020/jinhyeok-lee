// << 1. init process >> 
__init();


/**
 * <strong>take care of the initial setup</strong>
 * @author justin hanry(이 진혁)
 */
function __init() {

    // base global variable declare
    const gEnv  = global.env = {};
    const sSys  = global.sys = {};
    const gGS   = global.gs  = __GetterSetter__(gEnv, sSys);

    // (_) bind update [ rebind ]
    global.env._ = global.env;

    /**
     * bind types set
     * <strong>compile</strong> basic types
     * with contain "_" then explain factory object
     */
    const gType = global.tp = global.types = __Types__();

    // << path >> module setup
    const gPath = global.sys.path = require('path');

    // << root-path & build-path >> setting
    const gBaseDir  = global.sys.defaultBaseDir  = __dirname;
    const gBuildDir = global.sys.defaultBuildDir = gPath.join(gBaseDir, 'dest');

    (( /**  module alise << registration >> */ ) => {
        // Default Module << Aliase >> setup
        const gModuleAlias = global.aliasFactory = require('module-alias');

        /**
         * << registration alias and type of basic process >>
         * <b>basic registration</b> are <strong>explain</strong> [[ package.json ]]
         */
        moduleAliasRegistration(gModuleAlias);

        /**
         * <b> registration module aliase </b>
         * @param {module-alias} gModuleAlias 
         */
        function moduleAliasRegistration(gModuleAlias) {

            /**
             * aliase setup
             * must have <b>registartion</b> execute 
             * for package.json > [[ _ModuleAliase ]]
             */
            require('module-alias/register');

            /**
             * extension area
             * ex ) gModuleAlias.addAlias("@aliase", "item");
             */
            gModuleAlias.addAlias("@extension", gs.get(tp.path).join(gs.get(tp.baseDir), 'extension'));
            gModuleAlias.addAlias("@router"   , gs.get(tp.path).join(gs.get(tp.baseDir), 'router'));
        }
    })();

     /**
     * Default Logging setup
     *      [[ Level 1 ]] : system(os)
     *      [[ Level 2 ]] : root(framework)
     *      [[ Level 3 ]] : > application [ error, info ,log, debug, warn ]
     */
    ((/** default logger << registration >> */) => {
    
        const gLogger   = global.sys.log   = console.log;
        const gDebug    = global.sys.debug = console.debug;
        const gError    = global.sys.error = console.error;
        const gInfo     = global.sys.info  = console.info;
        const gDir      = global.sys.dir   = console.dir;

        const gLogColor = global.sys.defaultLogColor = jsLogColor = require('@extension/js-log-color');

    })();

    ((/** overloading << registration >> */)=>{

        const gOverloading 
            = global.objectFactory 
                = global.sys.jsOverloadFactory 
                    = require('@extension/js-overload');

    })();


    (( /** config << registration >> */ ) => {  

        // << configuration >> setup
        const gConfiguration = global.sys.jsConfigFactory = require('@extension/js-config');

        // Default << configuration >> setup   
        const gAppConfig = gConfiguration.loadFile('application.yaml', 'application', gEnv);

        /**
         * << registration config App >> - paranet is glboal environment
         * 
         * [[ globalEnvironment ]]
         *          +-- application environment (application)
         *                  +-- config-modules (files)
         */
        configurationRegistration(gAppConfig);

        /**
         * <b> application environment registration </b>
         * @param {Object} gAppConfig application environment
         */
        function configurationRegistration(gAppConfig) {
            
            // split-separator (1 space)
            const const_SplitSeparator = ' ';

            // extend configuration
            if(gAppConfig.extend) {

                const exDir   = gAppConfig.extend.dir
                    , exFiles = gAppConfig.extend.files

                // bind directory
                if(exDir) 
                    for(dir of exDir.split(const_SplitSeparator))
                        gConfiguration.loadDir(dir, gAppConfig);

                // bind files[array]
                if(exFiles) 
                    for(file of exFiles.split(const_SplitSeparator))
                        gConfiguration.loadFile(file, null, gAppConfig);
            }
        }
    })();

    ( /** default matchers << registration >> */ () => {

        const gMatcher = global.sys.defaultMatcher = (new require('ant-path-matcher'))();
    })();

    
    (( bindApp /** default setting [[ application - app ]] values */) => {

        // default value setting [ rebind $ ]
        const $ = bindApp;

        // [[ application environment ]]
        $.port = $.port || 4000;
        $.host = $.host || '127.0.0.1';
        $.toc  = $.toc  || 'true';

        // [[ pagination ]] $1
        const $001           = $.pagination = $.pagination || {};
              $001.type      = $001.type                   || 'infinity';
              $001.number    = new Number($001.number)     || 5;
              $001.splash    = $001.splash                 || true;

        // [[ router ]] $002
        const $002           = $.router = $.router         || {};
              $002.dir       = $002.dir                    || '/';
              $002.path      = $002.path                   || '/'

        // [[ view ]] $003  
        const $003           = $.view = $.view             || {};
              $003.type      = $003.type                   || 'pug';
              $003.theme     = $003.theme                  || 'xt256';
              $003.dir       = $003.dir                    || '/views';

        // [[ analytics ]] $004
        const $004           = $.analytics = $.analytics   || {};
              $004.data      = $004.data                   || '/data';
              $004.keyword   = $004.keyword                || 'key';
              $004.seperator = $004.seperator              || '\s';
              $004.pages     = $004.pages                  || {};
              $004.pages.dir = $004.pages.dir              || '/pages';

    })(gs.get(types.app).app);


    ( ( gPug /** will configuration on pug view template, this function is any composit with <strong>markdown-it</strong> */ )=>{

        // markdown options
        const mHighLightJs   = require('markdown-it-highlightjs');
        const mIdentified    = require('markdown-it-anchor');
        const mMarked        = require('markdown-it-mark');

        const mMdownOptions  = { html : true, xhtmlOut : true, typographer : true, };
        const mIdenfiOptions = { level : 1  , permalinkClass: 'header-anchor',  slugify : (e) => e.replace(/\s+/g,'-')};

        const mMarkdownIt   
            = global.sys.defaultMarkdown 
                = require('markdown-it')(mMdownOptions).use(mHighLightJs , { })
                                                    .use(mIdentified, mIdenfiOptions)
                                                    .use(mMarked);

        const jsMarkdown 
            = global.sys.jsMarkdown 
                = require('@extension/js-markdown');

        // extends filter(:markdown)
        gPug.filters['markdown'] = (e) => jsMarkdown.markdown(e).value;

    })(global.sys.pug = require(( gs.get(tp.app).app ).view.type || 'pug'));


    (( /** default page analytics << registration >> */ )=>{

        const mJsAnalytics   = global.sys.jsPageManager = require('@extension/js-analytics')
            , mApp           = gs.get(tp.app).app
            , mAnalytics     = mApp.analytics
            , mData          = mAnalytics.data
            , mPages         = mAnalytics.pages
            , mPagesDir      = mPages.dir
            , mPagesDirs     = mPagesDir.split(' ')
            , mPageKeyword   = mAnalytics.keyword
            , mPageSeperator = mAnalytics.seperator
            , mJsMarkdown    = sys.jsMarkdown
            ;
        
        // mange on directory analytics
        const mAnalyticsRepo
            = mJsAnalytics.use(sys.jsMarkdown.analytics)
                          .manage(mPagesDirs, mData, mPageKeyword, mPageSeperator);
                    
            // registration analytics information
            if(!global.sys.analytics) global.sys.analytics = {};
            
            global.sys.analytics.pages = mAnalyticsRepo.pages;
            global.sys.analytics.index = mAnalyticsRepo.index;
            global.sys.analytics.words = mAnalyticsRepo.words;    


    })();



    (( /** registration database accesss and session creater*/)=>{
        
        const mJsAccess = global.sys.access = require('@extension/js-access');


    })();

    (( /** router << registraton >> */ ) => {

        const gExpress        = global.sys.express         = require('express');
        const gRouter         = global.sys.jsRouterFactory = require('@extension/js-router');
        const gProcess        = global.sys.process         = require('@extension/js-process');
        const gQuerystring    = global.sys.queryString     = require('querystring');

        const gRouterProccess
            = global.sys.routerProccess
                = (options) => Object.assign(gs.get(types.express)
                                                .Router(options), {pk:'$rtr'});

        // get application global config
        // bind port and host information to variable 
        // { port, host, router, view, resources, markdown, processing }
        const app           = gs.get(tp.app).app
            , mHost         = app.host
            , mPort         = app.port

            // [ router ] attributes
            , mRouterDir    = app.router.dir
            , mRouterPath   = app.router.path

            // [ view ] attributes
            , mViewType     = app.view.type
            , mViewDir      = app.view.dir
            

            // [ resources ] attributes
            , mResources    = app.resources
            , mResourceList = ( mResources ? mResources.split(' ') : null )

            // [ markdown ] middleware
            , mMarkdownProcess = gs.get(tp._jsMarkdown).postProcess
            
            // [ processing ] middleware
            , { preProcess, postProcess } = ( gProcess )

            // [ router callback ]
            , mCallback = (() => sys.debug(`${gs.get(types.logColor).green('[[ Server Start ]]')} http://${mHost}:${mPort}${mRouterPath}`))
            ;

        /**
         * [[ attributes ]]
         * createRouter : make << init >> router 
         * express : registration Express Router
         * addRouter : registration routing bind extendable > ex ) addRouter('/', (req,res)=>{}) 
         * addRouters : registration router path
         * use [ arguments 1 to 4 ] or uses [ Arrays ]
         * build : build up router
         */
        const gHttpServer 
            = global.sys.defaultHttpServer 
                = gRouter.createRouter(mPort, mHost, mCallback)
                         .express(gExpress)
                         .addRouters(mRouterDir, mRouterPath)
                         .uses(gExpress.json(), gExpress.urlencoded({ extended: false}))
                         .uses(preProcess, mMarkdownProcess, postProcess)
                         .resources(mResourceList)
                         .view(mViewType, mViewDir)
                         .build();
    })();










    


    /**
     * Map the registered type using a <strong>String</strong>
     * @param {object} extensionType type mapping object
     */
    function __Types__(extensionType) {

        /** << init >> bind object */
        if(!extensionType) {
            extensionType = {};
        }

        /**
         * extension [[ type ]]
         * ex ) extensionType.loader = "loader";
         */
        extensionType = Object.assign(extensionType, { 

            "_jsConfig"   : "jsConfigFactory",
            "_jsOverload" : "jsOverloadFactory",
            "_jsRouter"   : "jsRouterFactory",
            "_router"     : "routerProccess",
            "_pageManger" : "jsPageManager",
            "_jsMarkdown" : "jsMarkdown",
            "access"      : "access",
            "config"      : "_",
            "path"        : "path",
            "app"         : "application",
            "baseDir"     : "defaultBaseDir",
            "builddir"    : "defaultBuildDir",
            "matcher"     : "defaultMatcher",
            "logColor"    : "defaultLogColor",
            "server"      : "defaultHttpServer",
            "markdown"    : "defaultMarkdown",
            "express"     : "express",
            "analytics"   : "analytics",
            "queryString" : "queryString",

        });

        return extensionType;
    }

    /**
     * <b> returns a read-only object 
     * that <strong>cannot(week)</strong> be modified </b>
     * @param {Object} env immutable Elements Object
     */
    function __GetterSetter__(env, sys) {

        // Readable Elements
        const re = env;
        const sv = sys;

        return {
            get : (k) => { 
                return re[k]||sv[k]; 
            },
            set : (k, v) => { 
                throw new Error('global elements are only readable'); 
            },
        }
    }
}