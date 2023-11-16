const express = require('express')
const router = express.Router()
const offers = require('../database/controllers/offers')



router.post('/offers/create', async (req, res) => {
    const { search_id, user_id, amount, description, state_code } = req.body
    const offer = await offers.create(search_id, user_id, amount, description, state_code)
    res.json(offer)
})

router.post('/offers/findAllBySearch', async (req, res) => {
    const { search_id } = req.body
    const offer = await offers.findAllBySearch(search_id)
    res.json(offer)
})


router.post('/offers/findOneBySearchAndUser', async (req, res) => {
    const { search_id, user_id } = req.body
    const offer = await offers.findOneBySearchAndUser(search_id, user_id)
    res.json(offer)
})



router.post('/offers/acceptOffer', async (req, res) => {
    const { offer_id } = req.body
    const offer = await offers.acceptOffer(offer_id)
    res.json(offer)
})

router.post('/offers/findOneSelectedBySearch', async (req, res) => {
    const { search_id } = req.body
    const offer = await offers.findOneSelectedBySearch(search_id)
    res.json(offer)
})

module.exports = router