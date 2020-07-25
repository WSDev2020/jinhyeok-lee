// * 인자값을 env로 처리
// ex) node app.js name='jhlee' age=30 addr="여의대방로 55길 4 304호"
for(var e in process.argv) {
    var env = process.argv[e];

    var lst = env.split('=');

    if(lst.length == 2) {
        process.env[lst[0]] = lst[1];
    }
}

console.log(`process.argv.name : ${process.env.name}`);
console.log(`process.argv.age : ${process.env.age}`);
console.log(`process.argv.addr : ${process.env.addr}`);