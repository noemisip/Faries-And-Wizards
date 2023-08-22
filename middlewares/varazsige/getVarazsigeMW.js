/**
 * Egy varazsige betoltese adatbazisbol :varazsigeid parameter hasznalataval
 * Adatokat ide tolti be : res.locals.spell
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const Spell = objectrepository.Spell;
        Spell.findOne({ _id: req.params.varazsigeid }, (err, spell) => {
            if (err || !spell) {
                return next(err);
            }
            res.locals.spell = spell
            return next();
        });
    };
};