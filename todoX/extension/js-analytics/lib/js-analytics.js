const fs      = require('fs');
const path    = gs.get(tp.path);
const baseDir = gs.get(tp.baseDir);


const analyticsJFileName = 'analytics.json';
const analyticsDFileName = 'index.json';
const analyticsKFileName = 'keyword.json';

const defaultFrame  = { pages: { }, seq : 0 }

// json page repository
var mOrgJsonRepo = null
var mJsonRepo    = null;

// keyword repository
var mKeyWordRepo = null;

// file indexing by date
var mFileIndex   = [  ];

var mMiddleware  = [  ];

/**
 * read the file and print the unique index and @File information. 
 * (Unique index is executed once for the first time.)
 * @param {Array} files arguments the file url or file path.
 */
function _manage(files, data, keyword, seperator) {

    // get meta data
    const jFilePath = path.join(baseDir, data, analyticsJFileName);
    const dFilePath = path.join(baseDir, data, analyticsDFileName);
    const kFilePath = path.join(baseDir, data, analyticsKFileName);

    // set default index(clust), frame(meta)
    mOrgJsonRepo  = defaultFrame;

    // read files
    if(fs.existsSync(jFilePath)) mOrgJsonRepo = JSON.parse(fs.readFileSync(jFilePath, 'utf-8'));
    
    // copy meta info
    mJsonRepo    = { pages: { }, seq : mOrgJsonRepo.seq||0};
    mFileIndex   = [];
    mKeyWordRepo = [];


    // circle loop files in directory
    files.forEach((file)=>resolverFileList(baseDir, '', file));

    const originlog = JSON.stringify(mOrgJsonRepo);
    const changelog = JSON.stringify(mJsonRepo);

    // update new version
    if(originlog != changelog) {

        // arrage file date asc
        mFileIndex = mFileIndex.sort((e, f) => e[0]>f[0] ? 1 : -1);

        // file status [delete]
        _checkFileDelt();

        // validate and analytics processing
        _analytics(keyword, seperator);

        // file and repository data write
        if(fs.existsSync(jFilePath)) fs.unlinkSync(jFilePath);
        if(fs.existsSync(dFilePath)) fs.unlinkSync(dFilePath);
        if(fs.existsSync(kFilePath)) fs.unlinkSync(kFilePath);

        fs.writeFileSync(jFilePath, JSON.stringify(mJsonRepo));
        fs.writeFileSync(dFilePath, JSON.stringify(mFileIndex));
        fs.writeFileSync(kFilePath, JSON.stringify(mKeyWordRepo));
    }

    return {
          pages : mJsonRepo
        , index : mFileIndex
        , words : mKeyWordRepo
    }
}


/**
 * read keywords and process keywords and their combinations.
 */
function _analytics(akeyword, aSeperator) {

    for(var e in mJsonRepo.pages) {
        
        if(mJsonRepo.pages[e][akeyword]) {

            // [ matching ] seperator and page keyword
            const mKeywords = mJsonRepo.pages[e][akeyword].split(new RegExp(aSeperator));
    
            for(key of mKeywords) {
                
                // failure key set pass
                if(key.trim() == '') continue;
                
                // key repository create
                if(!mKeyWordRepo[key]) mKeyWordRepo[key] = [0];

                // key bind
                if(!mKeyWordRepo[key].includes(e)) {
                    mKeyWordRepo[key][0] += 1;
                    mKeyWordRepo[key].push(e);
                }
            }
        }
    }
}

/**
 * fine delete file on Container 
 */
function _checkFileDelt() {

    const mOrgPage = mOrgJsonRepo.pages;
    const mUpdPage = mJsonRepo.pages;

    // loop org pages
    for(var e in mOrgPage) {
        // check delete pages
        if(!mUpdPage[e]) {
            sys.debug(`${gs.get(tp.logColor).red('[[ Analytics ]]')} file : ${ e } is ${gs.get(tp.logColor).red('deleted')} `)
        }
    }
}

/**
 * copy the object target 
 * and duplicate all information in the target.
 * @param {Object} obj Object to copyed
 * @param {Object} target Object to copy target
 */
function _fullCopy(obj, target) {
    
    for(var e in target) obj[e] = typeof (v = target[e]) == 'object' ? _fullCopy(v instanceof Array ? [] : {}, v) : v

    return obj;
} 


/**
 * it loads and caches files 
 * while traversing all [[ registered ]] items.
 * @param {String} baseDir basic directory path
 * @param {String} fileName load fileName
 */
function resolverFileList(baseDir, middle, fileName) {

    const fullfileName = path.join(middle,fileName);

    try{
        
        // load directory
        const dir        = fs.readdirSync(path.join(baseDir, fullfileName), 'utf-8');
        
        // if this is directory will loop next in this
        dir.forEach(file => resolverFileList(baseDir, fullfileName,  file));

    } catch(e){

        var mPath = path.join(baseDir, fullfileName);

        // load file
        var mFile = fs.readFileSync(mPath, 'utf-8');

        // use middl - line
        for (e of mMiddleware) mFile = e(mFile);
        
        // if it already exists. do not participate
        if(mOrgJsonRepo.pages[fullfileName]) {

            if(mOrgJsonRepo.pages[fullfileName].index) mFile.index = mOrgJsonRepo.pages[fullfileName].index;

            if(JSON.stringify(mOrgJsonRepo.pages[fullfileName]) == JSON.stringify(mFile)) {

                mJsonRepo.pages[fullfileName] = mOrgJsonRepo.pages[fullfileName];
                mFileIndex.push([mFile.date||'0000-00-00', fullfileName]);

                return sys.debug(`${gs.get(tp.logColor).red('[[ Analytics ]]')} file : ${ fullfileName } is ${gs.get(tp.logColor).green('normal')} `)
            } else {

                sys.debug(`${gs.get(tp.logColor).red('[[ Analytics ]]')} file : ${ fullfileName } is ${gs.get(tp.logColor).yellow('update')} `)
            }
        } else {
            sys.debug(`${gs.get(tp.logColor).red('[[ Analytics ]]')} file : ${ fullfileName } is ${gs.get(tp.logColor).red('new')} `)
            
            mJsonRepo.seq +=1;
        }

        // [[ indexing ]]
        // file-list push and index registration
        if(!mFile.index) mFile.index = mJsonRepo.seq;

        // fine indexing repository add on
        mFileIndex.push([mFile.date||'0000-00-00 00:00:00', fullfileName]);

        // file information(meta-data) push
        mJsonRepo.pages[fullfileName] = mFile;
    }
}

function _getIndexById(id) {
    
    for(e in mFileIndex) {
        if(mFileIndex[e][1] == id) {
            return e;
        }
    }

    return -1;
}

/**
 * regist middleware on js-analytics
 * @param {Function} middleware use middleware
 */
function _use(middleware) {

    mMiddleware.push(middleware);

    return exporter;
}

const exporter =  {
    manage  : _manage ,
    use     : _use,
}


module.exports = exporter