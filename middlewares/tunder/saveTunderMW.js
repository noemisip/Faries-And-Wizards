/**
 * Adatbazisba update vagy save tundereket, POST keressel
 * Ha van res.locals.tunder, akkor modosit, ha nincs akkor letrehoz
 * Ha vegez, akkor a /tunder oldalra megy
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const Fairy = requireOption(objectrepository, 'Fairy');

    return function (req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.wingSize === 'undefined' ||
            typeof req.body.home === 'undefined' ||
            typeof req.body.glitter === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.fairy === 'undefined') {
            res.locals.fairy = new Fairy();

        }

        res.locals.fairy.name = req.body.name;
        res.locals.fairy.wingSize = req.body.wingSize;
        res.locals.fairy.home = req.body.home;
        res.locals.fairy.glitter = req.body.glitter;
        res.locals.fairy.goodFairy = req.body.goodFairy;

        res.locals.fairy.save((err) => {
            if (err) { return next(err); }
        });
        return res.redirect('/tunder');
    };
};