// * 인자값 확인
// 인자값 처리는 process객체의 argv를 통하여 처리하며 구분자(=)를 통하여 분리 하도록 합니다.
// 또한 인자값의 space가 존재할 경우 값을 쌍따옴표(")를 사용하여 묶어서 처리하도록 합니다.
// 최초값은 node의 실행파일이며 두번째는 실행파일이 등록 되게 됩니다.
// ex) node app.js name="jhlee" age=30 addr="여의대방로 55길 4 304호"
var exePath  = process.argv[0];
var bootFile = process.argv[1];
var argName  = process.argv[2];
var argAge   = process.argv[3];
var argAddr  = process.argv[4];

console.log(`exePath : ${exePath}`);
console.log(`bootFile : ${bootFile}`);
console.log(`argName : ${argName}`);
console.log(`argAge : ${argAge}`);
console.log(`argAddr : ${argAddr}`);