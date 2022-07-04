const mongoose = require('mongoose');

const { Schema } = mongoose;

const artifactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        maxlength: 1500,
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    }
});

const Artifact = mongoose.model('Artifact', artifactSchema);

module.exports = Artifact;