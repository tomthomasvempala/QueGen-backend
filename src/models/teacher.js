const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        // lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    pwd: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        // required: true,
        trim: true,
    },
    dept: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model("Teacher", TeacherSchema);