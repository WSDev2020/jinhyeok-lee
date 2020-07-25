const router = gs.get(tp._router)();
const access = gs.get(tp.access);


router.get('/', (req, res) => {
    
    const mApp = gs.get(tp.app).app;

    const params = {};

    params.pagination = {
          type     : mApp.pagination.type
        , number   : mApp.pagination.number
        , spash    : mApp.pagination.spash
        , start    : 1
        , end      : mApp.pagination.number
        , contents : access.getRange(1, mApp.pagination.number)
    };

    res.render('main.pug', params);
})

router.get('/page', (req, res) => {

    res.render('index.pug', {}, req.query.id);
})


module.exports = router;