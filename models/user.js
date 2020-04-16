const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const myListSchema = new Schema({
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
} , {
    timestamps: true
});

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    myList: [myListSchema]
    }, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, callBack) {
    bcrypt.compare(tryPassword, this.password, callBack);
};

module.exports = mongoose.model('User', userSchema);