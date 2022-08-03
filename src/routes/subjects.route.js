const express = require('express')
const router = express.Router()
const subjectModel = require('../models/subject')
const subjectQBModel = require('../models/questionBank')

router.get('/', async(req, resp) => {
    const subjects = await subjectModel.find();
    try {
        resp.json(subjects);
    } catch (error) {
        resp.status(500).send(error);
    }
})

router.get('/:id', async(req, resp) => {
    const subjects = await subjectModel.findOne({ code: req.params.id });
    try {
        resp.json(subjects);
    } catch (error) {
        resp.status(500).send(error);
    }
})

router.post('/', async(req, resp) => {
    try {

        const subjectQB = await subjectQBModel.create({
            code: req.body.code,
            questions: []
        })
        const subject = await subjectModel.create({

            code: req.body.code,
            name: req.body.name,
            courseOutcomes: req.body.courseOutcomes,
            teachers: req.body.teachers
        })




        resp.send(subjectQB)
    } catch (error) {
        resp.status(500).send(error);
    }


})





module.exports = router;