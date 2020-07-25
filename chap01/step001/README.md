# 설명

가장 먼저 노드를 사용하여 서버를 만들어 보도록 하겠습니다.

이 장에서 가장 중요한 사항은

http를 활용하여 서버를 동작시킨다는 것입니다.

아래 3줄이 이번장에 핵심 내용입니다.

```js
const http = require('http');

const app = http.createServer(...)

app.listen(port, host, ...);
```

