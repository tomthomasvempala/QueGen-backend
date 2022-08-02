const express = require('express')
const router = express.Router()
const teacherModel = require('../models/teacher.js')
const subjectModel = require('../models/subject')


router.post('/', async(req, resp) => {
    console.log(req.body)
    const teacher = await teacherModel.findOne({ email: req.body.email, pwd: req.body.password });
    if (teacher == null) {
        resp.status(401).send({ "message": "Invalid Credentials" })
        return
    }
    try {
        resp.status(200).send({ "message": "success", "data": teacher });
    } catch (error) {
        resp.status(500).send(error);
    }
})

module.exports = router;