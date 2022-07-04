const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Purchased = require('./Purchased');

const geekSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    orders: [Purchased.schema]
});

geekSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const salt = 10;
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
})

geekSchema.methods.isCorrectPassword = async function(password) {
    return await bycrpt.compare(password, this.password);
};

const Geek = mongoose.model('Geek', geekSchema);

module.exports = Geek;