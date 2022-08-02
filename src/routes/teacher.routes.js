const express = require('express')
const router = express.Router()
const teacherModel = require('../models/teacher.js')
const subjectModel = require('../models/subject')


router.get('/', async(req, resp) => {
    const teachers = await teacherModel.find();
    try {
        resp.json(teachers);
    } catch (error) {
        resp.status(500).send(error);
    }
})



router.get('/:id', async(req, resp) => {
    const teacher = await teacherModel.findOne({ id: parseInt(req.params.id) });
    if (teacher == null) {
        resp.status(404).send('Not Found')
        return
    }
    try {
        resp.json(teacher);
    } catch (error) {
        resp.status(500).send(error);
    }
})

router.get('/:id/subjects', async(req, resp) => {
    const subjects = await subjectModel.find();

    let teachersSubjects = []
    subjects.forEach((sub) => {
        if (sub.teachers.includes(parseInt(req.params.id))) {
            teachersSubjects.push(sub)
        }
    })
    try {
        resp.send(teachersSubjects);
    } catch (error) {
        resp.status(500).send(error);
    }
})

router.put('/:id', async(req, resp) => {
    const teacher = await teacherModel.findOne({ id: parseInt(req.params.id) })
    if (teacher === null) {
        resp.status(404).send('Not Found')
        return
    }
    try {
        if (req.body.name != null) {
            teacher.name = req.body.name;
        }
        if (req.body.email != null) {
            teacher.email = req.body.email;
        }
        if (req.body.pwd != null) {
            teacher.pwd = req.body.pwd;
        }
        if (req.body.dept != null) {
            teacher.dept = req.body.dept;
        }
        resp.send(req.body)
        await teacher.save();
    } catch (error) {
        resp.status(500).send(error);
    }


})


router.post('/', async(req, resp) => {
    const teachers = await teacherModel.find()
    if (teachers === null) {
        resp.status(404).send('Not Found')
        return
    }
    const nextId = teachers.length + 1000;
    try {

        const teacher = await teacherModel.create({
                name: req.body.name,
                pwd: req.body.pwd,
                dept: req.body.dept,
                email: req.body.email,
                id: nextId
            })
            // await teacher.save();
        resp.send(teacher)
    } catch (error) {
        resp.status(500).send(error);
    }


})


module.exports = router;