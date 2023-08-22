const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Fairy = db.model('Fairy', {
    name: String,
    wingSize: Number,
    home: String,
    glitter: Number,
    goodFairy: Boolean,
    _spells:  [{
        type: Schema.Types.ObjectId,
        ref: 'Spell'
    }]
});

module.exports = Fairy;