const mongoose = require('mongoose')

const questionBankScheme = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true
    },
    questions: {
        type: Array
    }
})


module.exports = mongoose.model("questionBank", questionBankScheme);