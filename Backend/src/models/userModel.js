const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("user", userSchema);