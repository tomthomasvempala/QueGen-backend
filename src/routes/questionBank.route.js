const express = require('express')
const router = express.Router()
const qbModel = require('../models/questionBank')


router.get('/:code', async(req, resp) => {
    console.log(req.params.code)
    const qb = await qbModel.findOne({ code: req.params.code });
    try {
        resp.json(qb);
    } catch (error) {
        resp.status(500).send(error);
    }
})


module.exports = router;