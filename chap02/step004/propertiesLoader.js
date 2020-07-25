const fs         = require('fs');
const path       = require('path');
const yaml       = require('js-yaml');
const properties = require("properties");

const __BASE_PROPS_YAML__ = 'application.yaml';
const __BASE_PROPS_PROP__ = 'application.properties';

// 확장자를 확인하기 위한 정규식
const __EXTREG__ = /\.([^\.]*)$/;

var __props__ = {};

function _propsResolveYaml (fileName, alias) {
    try{

        var data = fs.readFileSync(path.join(fileName), 'utf-8');
        var prop = yaml.safeLoad(data);

        if(alias) {

            __props__[alias] =  prop
        } else {
            
            for(e in prop) {

                __props__[e] = prop[e];
            }
        }
    }catch(e){ }
}

function _propsResolveProperties (fileName, alias) {
    try{
        var data = fs.readFileSync(path.join(fileName), 'utf-8');
        
        var prop = properties.parse(data)

        if(alias) {

            __props__[alias] =  prop
        } else {

            for(e in prop) {

                __props__[e] = prop[e];
            }
        }
    }catch(e){ console.log(e)}
}


function _load(fileName, alias) {

    var matchedFileExt = fileName.match(__EXTREG__);

    if(matchedFileExt) {

        var ext = matchedFileExt[1];
        
        // yaml resolve
        if( ext === 'yaml' ) {
            _propsResolveYaml(fileName, alias);
        } 
        // properties resolve
        else if( ext === 'properties' ) {
            _propsResolveProperties(fileName, alias);
        }
    }
}

module.exports = {
    properties  : __props__ ,
    load        : _load,
};