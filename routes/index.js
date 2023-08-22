const renderMW = require('../middlewares/renderMW');
const delTunderMW = require('../middlewares/tunder/delTunderMW');
const getTunderekMW = require('../middlewares/tunder/getTunderekMW');
const getTunderMW = require('../middlewares/tunder/getTunderMW');
const saveTunderMW = require('../middlewares/tunder/saveTunderMW');
const delVarazsigeMW = require('../middlewares/varazsige/delVarazsigeMW');
const getVarazsigekMW = require('../middlewares/varazsige/getVarazsigekMW');
const getVarazsigeMW = require('../middlewares/varazsige/getVarazsigeMW');
const saveVarazsigeMW = require('../middlewares/varazsige/saveVarazsigeMW');
const addSpellMW = require('../middlewares/tunder/addSpellMW');


const Fairy = require('../models/Tunder');
const Spell = require('../models/Varazsige');

module.exports = function (app) {
    const objRepo = {
        Fairy: Fairy,
        Spell: Spell,
    };

    app.use('/tunder/new',
        getVarazsigekMW(objRepo),
        saveTunderMW(objRepo),
        renderMW(objRepo, 'tunderform'));
    app.use('/tunder/edit/:tunderid',
        getTunderMW(objRepo),
        saveTunderMW(objRepo),
        renderMW(objRepo, 'tunderform'));
    app.get('/tunder/del/:tunderid',
        getTunderMW(objRepo),
        delTunderMW(objRepo));
    app.get('/tunder',
        getTunderekMW(objRepo),
        getVarazsigekMW(objRepo),
        renderMW(objRepo, 'tunderek'));

    app.use('/varazsige/new',
        saveVarazsigeMW(objRepo),
        renderMW(objRepo, 'varazsigeform'));
    app.use('/varazsige/edit/:varazsigeid',
        getVarazsigeMW(objRepo),
        saveVarazsigeMW(objRepo),
        renderMW(objRepo, 'varazsigeform'));
    app.get('/varazsige/del/:varazsigeid',
        getVarazsigeMW(objRepo),
        delVarazsigeMW(objRepo),
    );
    app.use('/varazsige/:tunderid/:varazsigeid',
        getTunderMW(objRepo),
        getVarazsigeMW(objRepo),
        addSpellMW(objRepo)
        //saveTunderMW(objRepo),
        //renderMW(objRepo, 'varazsigevalaszto'));
    );
    app.get('/varazsige/:tunderid',
        getTunderMW(objRepo),
        getVarazsigekMW(objRepo),
        saveTunderMW(objRepo),
        renderMW(objRepo, 'varazsigevalaszto'));

    app.get('/varazsige',
        getVarazsigekMW(objRepo),
        renderMW(objRepo, 'varazsigek'));

    app.use('/',
        renderMW(objRepo, 'index'));
};