/**
 * Hozzaad egy varazsiget a kivalasztott tunderhez, ha meg nincs hozzarendelve az a varazsige
 * Utana elmenti az adatbazisba es visszalep a tunderek oldalra
 */


const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof res.locals.fairy === 'undefined'|| typeof res.locals.spell === 'undefined') {

            return next();
        }

        let counter = 0;

        res.locals.fairy._spells.forEach(function(spell){
            if ( spell._id.equals( res.locals.spell._id)){
                counter++;
            }
        });

        if(counter === 0){
            res.locals.fairy._spells.push(res.locals.spell);
        }


        res.locals.fairy.save((err) => {
            if (err) { return next(err); }
        });

        return res.redirect('/tunder');

    };
};