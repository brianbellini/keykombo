const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortcutSchema = new Schema({
    application: {
        type: String,
        required: true,
    },
    func: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
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
 }, {
    timestamps: true
});

module.exports = mongoose.model('Shortcut', shortcutSchema);