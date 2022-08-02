const express = require('express')
const router = express.Router()
const subjectModel = require('../models/subject')

router.get('/', async(req, resp) => {
    const subjects = await subjectModel.find();
    try {
        resp.json(subjects);
    } catch (error) {
        resp.status(500).send(error);
    }
})

router.get('/:id', async(req, resp) => {
    const subjects = await subjectModel.findOne({ id: req.id });
    try {
        resp.json(subjects);
    } catch (error) {
        resp.status(500).send(error);
    }
})


module.exports = router;