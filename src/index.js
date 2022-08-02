const express = require('express')
const mongoose = require('mongoose')
const teacherRoute = require('./routes/teacher.routes')
const app = express();
let teachers = require('./Database/users').teachers
let subjects = require('./Database/subjects').subjects

app.use(express.json());
// app.use(express.urlencoded());


mongoose.connect(
    "mongodb+srv://queGenAdmin:queGenAdmin@QueGen.ioutueu.mongodb.net/queGen?retryWrites=true&w=majority"
).then(() => {
    console.log("connected to db");
}).catch(err => console.log(err));

app.use('/teachers', require('./routes/teacher.routes'))
app.use('/subjects', require('./routes/subjects.route'))
app.use('/questionBank', require('./routes/questionBank.route'))


app.listen(3001, () => { console.log('Server started at localhost:3001') });