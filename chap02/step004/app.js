// 환경변수를 사용하여 설정파일을 처리하는 방법을 알아 보겠습니다.
const propertyLoader = require('./propertiesLoader');

propertyLoader.load('resources/'+process.env.NODE_ENV+'.yaml');

console.dir(propertyLoader.properties);