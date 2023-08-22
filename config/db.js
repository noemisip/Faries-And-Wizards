const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wmxqq2', { useNewUrlParser: true });

module.exports = mongoose;