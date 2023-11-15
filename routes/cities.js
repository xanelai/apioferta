const express = require('express')
const router = express.Router()
const cities = require('../database/controllers/cities')

router.post('/cities/create', async (req, res) => {
    const { name, state_id } = req.body
    const city = await cities.create(name, state_id)
    res.json(city)
})

router.get('/cities/findAll', async (req, res) => {
    const city = await cities.findAll()
    res.json(city)
})

module.exports = router