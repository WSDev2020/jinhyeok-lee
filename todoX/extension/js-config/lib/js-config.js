const fs     = require('fs');
const jsYaml = require('js-yaml');

/**
 * <strong>load configuration file use for application</strong>
 * @param {String} sPath full file path by the root path(rootPath)
 * @param {String} sAliase configuration aliase Name(compared)
 * @param {Object} oParent parent object
 */
function $loadFile(sPath, sAliase, oParent) {

    // create if there is no top-level parent.
    if(!oParent) oParent = {};
    
    const loadedYaml = jsYaml.safeLoad(
                            fs.readFileSync(
                                gs.get(types.path).join(
                                    gs.get(types.baseDir), sPath), 'utf-8'));

    // aliase setting(Default file name)
    if(!sAliase) {
        
        const fileInfo = sPath.match(/\/([^\/]*)\.yaml$/);

        if(fileInfo) sAliase = fileInfo[1];
        else return null;
    }

    return oParent[sAliase] = loadedYaml;
}

/**
 * Loads configuration files based on directory.
 * @param {String} sPath full file path by the root path(rootPath)
 * @param {Object} oParent parent object
 */
function $loadDir(sPath, oParent) {

    const sDirPath     = gs.get(types.path).join(gs.get(types.baseDir), sPath);
    const sLoadDirPath = fs.readdirSync(sDirPath, 'utf-8');

    for(e of sLoadDirPath) {

        var fileInfo = e.split('.');

        var fileName = fileInfo[0];
        var fileExt  = fileInfo[1];

        sys.log(`${gs.get(types.logColor).red('[[ init ]]')} participating... file : ${fileName}.${fileExt} to load [[${fileName}]]`);
        
        $loadFile(gs.get('path').join(sPath, e), fileName, oParent);
    }
}

module.exports = {
      loadFile : $loadFile
    , loadDir  : $loadDir
};