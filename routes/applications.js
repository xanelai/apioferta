const express = require('express')
const router = express.Router()
const applications = require('../database/controllers/applications')

router.post('/applications/create', async (req, res) => {
    const { search_id, user_id, state_code } = req.body
    const application = await applications.create(search_id, user_id, state_code)
    res.json(application)
})

router.post('/applications/findAllByUser', async (req, res) => {
    const { user_id } = req.body
    const application = await applications.findAllByUser(user_id)
    res.json(application)
})

router.post('/applications/findAllWaitingByUser', async (req, res) => {
    const { user_id } = req.body
    const application = await applications.findAllWaitingByUser(user_id)
    res.json(application)
})

router.post('/applications/findAllOffersByUser', async (req, res) => {
    const { user_id } = req.body
    const application = await applications.findAllOffersByUser(user_id)
    res.json(application)
})

router.post('/applications/findAllAwardedByUser', async (req, res) => {
    const { user_id } = req.body
    const application = await applications.findAllAwardedByUser(user_id)
    res.json(application)
})

router.post('/applications/update', async (req, res) => {
    const { id, state_code } = req.body
    const application = await applications.update(id, state_code)
    res.json(application)
})

router.post('/applications/destroy', async (req, res) => {
    const { id } = req.body
    const application = await applications.destroy(id)
    res.json(application)
})



router.post('/applications/findOneBySearchAndUser', async (req, res) => {
    const { search_id, user_id } = req.body
    const application = await applications.findOneBySearchAndUser(search_id, user_id)
    res.json(application)
})

module.exports = router