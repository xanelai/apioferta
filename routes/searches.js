const express = require('express')
const router = express.Router()
const searches = require('../database/controllers/searches')

router.post('/searches/create', async (req, res) => {
    const { city_id, category_id, user_id, description, latency_code, state_code } = req.body
    const search = await searches.create(city_id, category_id, user_id, description, latency_code, state_code)
    res.json(search)
})

router.post('/searches/findAllByUser', async (req, res) => {
    const { user_id } = req.body
    const search = await searches.findAllByUser(user_id)
    res.json(search)
})

router.post('/searches/findAll', async (req, res) => {
    const search = await searches.findAll()
    res.json(search)
})

router.post('/searches/findAllWaitingByUser', async (req, res) => {
    const { user_id } = req.body
    const search = await searches.findAllWaitingByUser(user_id)
    res.json(search)
})

router.post('/searches/findAllOffersByUser', async (req, res) => {
    const { user_id } = req.body
    const search = await searches.findAllOffersByUser(user_id)
    res.json(search)
})

router.post('/searches/findAllClosedByUser', async (req, res) => {
    const { user_id } = req.body
    const search = await searches.findAllClosedByUser(user_id)
    res.json(search)
})

router.post('/searches/updateCloseDate', async (req, res) => {
    const { id, close_date } = req.body
    const search = await searches.updateCloseDate(id, close_date)
    res.json(search)
})

router.post('/searches/updateState', async (req, res) => {
    const { id, state_code } = req.body
    const search = await searches.updateState(id, state_code)
    res.json(search)
})

router.post('/searches/findOneById', async (req, res) => {
    const { id } = req.body
    const search = await searches.findOneById(id)
    res.json(search)
})

router.post('/searches/destroy', async (req, res) => {
    const { id } = req.body
    const search = await searches.destroy(id)
    res.json(search)
})


module.exports = router