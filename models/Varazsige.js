const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Spell = db.model('Spell', {
    name: String,
    duration: Number,
    wandNeeded: Boolean,
});

module.exports = Spell;