// 1. 이벤트 모듈 추출
var Events = require('events');

// 2. 새로운 이벤트 생성
var loadEvent = new Events();

var log = console.log;

// 3. 이벤트를 등록
loadEvent.on('repeatable', function(arg1, arg2){
    console.log(`${arg1} ${arg2} ~ !`);
});
loadEvent.once('nonRepeatable', function(arg1, arg2){
    console.log(`${arg1} ${arg2} ~ !`);
});

loadEvent.prependListener('repeatable', () => log('before [repeatable] Event << prependListener is run >> '));
loadEvent.prependListener('nonRepeatable', () => log('before [nonRepeatable] Event << prependListener is run >> '));

// 4. 이벤트 발생
log('========== emit ==========');
loadEvent.emit('repeatable','Hello','Events(Repeat)');
loadEvent.emit('repeatable','Hello','Events(Repeat)');

loadEvent.emit('nonRepeatable','Hello','Events(Non Repeat)');
loadEvent.emit('nonRepeatable','Hello','Events(Non Repeat)');


loadEvent.removeAllListeners('repeatable');

log('========== remove All Listeners ==========');

loadEvent.emit('repeatable','Hello','Events(Repeat)');
loadEvent.emit('nonRepeatable','Hello','Events(Non Repeat)');