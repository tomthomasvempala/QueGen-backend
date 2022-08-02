const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    courseOutcomes: {
        type: Array,
        required: true,
    },
    teachers: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("Subject", SubjectSchema);