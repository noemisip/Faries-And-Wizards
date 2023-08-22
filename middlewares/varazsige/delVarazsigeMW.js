/**
 * Torol az adatbazisbol egy varazsiget: res.locals.varazsige entitast torli
 * Ha vegez, akkor a /varazsige oldalra megy
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.spell === 'undefined') {

            return next();
        }

        res.locals.spell.remove(err => {
            if (err) {
                console.log(spell.name);
                return next(err);
            }

            return res.redirect('/varazsige');
        });
    };
};