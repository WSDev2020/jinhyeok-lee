
const analytics = gs.get(tp.analytics);

const mpPages = analytics.pages.pages;
const mpIndex = analytics.index;
const mpWords = analytics.words;

function _getRange(start, end) {

    const contents = {

        words : mpWords
    };
    
    for(var e = start-1 ; e < end ; e++) {

        if(mpIndex.length <= e) break;

        const _id = mpIndex[e][1];

        contents[_id] = mpPages[mpIndex[e][1]];
    }

    return contents;
}


function _getIdByIndex(index) {

}



module.exports = {
    getRange : _getRange
}