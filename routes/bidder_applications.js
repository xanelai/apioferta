const express = require('express')
const router = express.Router()
const bidderApplications = require('../database/controllers/bidder_applications')




router.post('/bidder_applications/create', async (req, res) => {
    const { user_id, plan, expiration_date } = req.body
    const bidderApplication = await bidderApplications.create(user_id, plan, expiration_date)
    res.json(bidderApplication)
})

router.post('/bidder_applications/findAll', async (req, res) => {
    const bidderApplication = await bidderApplications.findAll()
    res.json(bidderApplication)
})

router.post('/bidder_applications/findOne', async (req, res) => {
    const { id } = req.body
    const bidderApplication = await bidderApplications.findOne(id)
    res.json(bidderApplication)
})


router.post('/bidder_applications/findOneByUser', async (req, res) => {
    const { user_id } = req.body
    const bidderApplication = await bidderApplications.findOneByUser(user_id)
    res.json(bidderApplication)
})

module.exports = router
