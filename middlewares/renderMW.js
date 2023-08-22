/**
 *  Ertekek megjelenitese az oldalon
 *
 */
const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        console.log('render: ' + viewName);
        res.render(viewName, res.tpl);
    };
};