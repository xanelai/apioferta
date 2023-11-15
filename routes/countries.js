const express = require('express')
const router = express.Router()
const countries = require('../database/controllers/countries')

router.post('/countries/create', async (req, res) => {
    const { name, region } = req.body
    const country = await countries.create(name, region)
    res.json(country)
})

router.get('/countries/findAll', async (req, res) => {
    const country = await countries.findAll()
    res.json(country)
})

module.exports = router