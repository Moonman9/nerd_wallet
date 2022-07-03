const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;