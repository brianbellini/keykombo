const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortcutSchema = new Schema({
    function: {
        type: String,
        required: true,
    },
    combo: {
        type: String,
        required: true,
    },
    menu: {
        type: String,
        default: "Other",
        required: true,
    },
    application: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    }, {
    timestamps: true
});

module.exports = mongoose.model('Shortcut', shortcutSchema);