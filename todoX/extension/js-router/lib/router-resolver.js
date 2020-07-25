const cFs      = require('fs');
const cPath    = gs.get(types.path);
const cBaseDir = gs.get(types.baseDir);

/**
 * A <strong> function that parses the file </strong> information 
 * by checking the file's attribute information. 
 * Basically, it is processed based on the <b>entire</b> search.
 * @param {Object} mRout Router Object Model
 */
function resolve(mRout) {

    const mFileName = mRout.file;
    const mFileList = [];

    repeatSearch(cBaseDir, mFileName, mFileList);

    return mFileList;
}

function repeatSearch(sBaseDir, sFilePath, oFileList) {

    const sResolvePath = cPath.join(sBaseDir, sFilePath);

    try{

        cFs.readFileSync(sResolvePath, 'utf-8');

        const rOut = require(sResolvePath);

        rOut.id   = sResolvePath;
        rOut.file = sFilePath;

        oFileList.push(rOut);

    }catch(e) {

        try{
            const oDir = cFs.readdirSync(sResolvePath, 'utf-8');

            for(dirPath of oDir) {
                repeatSearch(sResolvePath, dirPath, oFileList);
            }

        }catch(e){
            throw new Error(e);
        }
    }
}

module.exports = {
    resolve : resolve
}