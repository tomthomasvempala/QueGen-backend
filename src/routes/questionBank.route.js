const express = require('express')
const router = express.Router()
const qbModel = require('../models/questionBank')


router.get('/:code', async(req, resp) => {
    const qb = await qbModel.findOne({ code: req.params.code });
    try {
        resp.json(qb);
    } catch (error) {
        resp.status(500).send(error);
    }
})

router.put('/:code', async(req, resp) => {
    const qb = await qbModel.findOne({ code: req.params.code });
    try {

        qb.questions.push({
            que: req.body.que,
            courseOutcome: req.body.courseOutcome,
            mark: req.body.mark,
            lastUse: null
        })
        await qb.save();
        resp.send({})
    } catch (error) {
        resp.status(500).send(error);
    }
})


module.exports = router;