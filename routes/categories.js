const express = require('express')
const router = express.Router()
const categories = require('../database/controllers/categories')


router.post('/categories/create', async (req, res) => {
    const { name, description } = req.body
    const category = await categories.create(name, description)
    res.json(category)
})

router.get('/categories/findAll', async (req, res) => {
    const category = await categories.findAll()
    res.json(category)
})

module.exports = router