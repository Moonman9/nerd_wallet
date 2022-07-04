const mongoose = require('mongoose');
const { model } = require('../config/connection');

const { Schema } = mongoose;

const purchaseSchema = new Schema({
    artifacts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Artifact'
        }
    ],
    purchasedDate: {
        type: Date,
        default: Date.now
    }
});

const Purchased = mongoose.model('Purchased', purchasedSchema);

module.exports = Purchased;