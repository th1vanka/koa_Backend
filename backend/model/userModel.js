const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            unique: true,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        role: {
            type: Number,
            default: 0,
        },
    }
);

const User = mongoose.model('users',userSchema);
module.exports =User;
