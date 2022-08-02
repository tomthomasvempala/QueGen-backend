const mongoose = require('mongoose')

const questionScheme = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true
    },
    que: {
        type: Array,
        required: true
    },
    courseOutcome: {
        type: Array
    },
    level: {
        type: Array
    },
    lastUse: {
        type: String
    }
})