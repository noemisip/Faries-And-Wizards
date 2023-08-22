/**
 * Egy tunder betoltese adatbazisbol :tunderid parameter hasznalataval
 * Adatokat ide tolti be : res.locals.fairy
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        const Fairy = objectrepository.Fairy;
        Fairy.findOne({ _id: req.params.tunderid }, (err, fairy) => {
            if (err || !fairy) {
                return next(err);
            }
            res.locals.fairy = fairy
            return next();
        });
    };
};