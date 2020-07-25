const rout  = require('./rout');
const home  = require('./modules/home');
const index = require('./modules/index');
const res   = require('./modules/resources');

const port = 42700;

rout.use('/home'     , home  );
rout.use('/index'    , index );
rout.use('/resources', res   );

rout.start(port, function(){
    console.log(`runnig at http://127.0.0.1:${port}`);
});