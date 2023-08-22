/**
 * Tunderek betoltese az adatbazisbol
 * Adatokat ide tolti be : res.locals.fairies
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const Fairy = objectrepository.Fairy;

        Fairy.find({}, (err, fairies) => {
            if (err) {
                return next(err);
            }
            res.locals.fairies = fairies;
            return next();
        });

    };
};