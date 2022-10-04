const { Schema, model, Types } = require('mongoose');
const { stringify } = require('querystring');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        }
    }
);

const User = model(UserSchema);

module.exports = User;