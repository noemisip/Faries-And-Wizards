/**
 * Varazsigek betoltese az adatbazisbol
 * Adatokat ide tolti be : res.locals.spells
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const Spell = objectrepository.Spell;

        Spell.find({}, (err, spells) => {
            if (err) {
                return next(err);
            }
            res.locals.spells = spells;
            return next();
        });

    };
};