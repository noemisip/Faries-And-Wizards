/**
 * Torol az adatbazisbol egy tundert: res.locals.fairy entitast torli
 * Ha vegez, akkor a /tunder oldalra megy
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.fairy === 'undefined') {

            return next();
        }

        res.locals.fairy.remove(err => {
            if (err) {
                console.log(fairy.name);
                return next(err);
            }

            return res.redirect('/tunder');
        });
    };
};