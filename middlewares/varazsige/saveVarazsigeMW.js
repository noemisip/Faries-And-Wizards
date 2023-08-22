/**
 * Adatbazisba update vagy save varazsigeket, POST keressel
 * Ha van res.locals.spell, akkor modosit, ha nincs akkor letrehoz
 * Ha vegez, akkor a /varazsige oldalra megy
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const Spell = requireOption(objectrepository, 'Spell');

        return function (req, res, next) {
            if (
                typeof req.body.name === 'undefined' ||
                typeof req.body.duration === 'undefined'
            ) {
                return next();
            }

            if (typeof res.locals.spell === 'undefined') {
                res.locals.spell = new Spell();
            }

            if (Number.isNaN(parseInt(req.body.duration, 10))) {
                return next(new Error("A duration szammal legyen megadva!"));
            }

            res.locals.spell.name = req.body.name;
            res.locals.spell.duration = req.body.duration;
            res.locals.spell.wandNeeded = req.body.wandNeeded;

            res.locals.spell.save((err) => {
                if (err) {
                    return next(err); }
            });
            return res.redirect('/varazsige');
        };
};