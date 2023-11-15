const express = require('express')
const router = express.Router()
const states = require('../database/controllers/states')

router.post('/states/create', async (req, res) => {
    const { name, country_id } = req.body
    const state = await states.create(name, country_id)
    res.json(state)
})

router.get('/states/findAll', async (req, res) => {
    const state = await states.findAll()
    res.json(state)
})

module.exports = router