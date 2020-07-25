// 1. properties파일과 yaml파일
// .properties와 .yaml파일을 읽어 온 다음 
// 파일의 등록 된 설정값을 추가해 보도록 하겠습니다.
const propertyLoader = require('./propertiesLoader');

propertyLoader.load('resources/_.properties');
propertyLoader.load('resources/_.yaml');

global.props = propertyLoader.properties;

console.log('===================== File Load =====================');
// properties file - information
console.log(`global.props['env.version'] : ${global.props['env.version']}`);
console.log(`global.props['env.os'] : ${global.props['env.os']}`);

// yaml file -- information
console.log(`global.props.users.name : ${global.props.users.name}`);
console.log(`global.props.users.age : ${global.props.users.age}`);

// 2. settings 파일 처리

var settings = require('./resources/settings');

global.environment = settings;

console.log('===================== Settings.js =====================');
console.log(`global.environment.system.os : ${global.environment.system.os}`);
console.log(`global.environment.system.path : ${global.environment.system.path}`);
console.log(`global.environment.system.version : ${global.environment.system.version}`);

console.log(`global.environment.inform.size : ${global.environment.inform.size}`);
console.log(`global.environment.inform.rail : ${global.environment.inform.rail}`);
console.log(`global.environment.inform.middle : ${global.environment.inform.middle}`);


console.dir(process.env.NODE_ENV2)