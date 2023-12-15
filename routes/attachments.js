const express = require('express')
const router = express.Router()
const attachments = require('../database/controllers/attachments')




router.post('/attachments/upload', attachments.upload.single('file'), attachments.uploadToAzure)

router.post('/attachments/create', async (req, res) => {
    const { url, search_id, offer_id, user_id } = req.body
    const attachment = await attachments.create(url, search_id, offer_id, user_id)
    res.json(attachment)
})

router.post('/attachments/findAllBySearch', async (req, res) => {
    const { search_id } = req.body
    const attachment = await attachments.findAllBySearch(search_id)
    res.json(attachment)
})

router.post('/attachments/findOneBySearch', async (req, res) => {
    const { search_id } = req.body
    const attachment = await attachments.findOneBySearch(search_id)
    res.json(attachment)
})


router.post('/attachments/findOneByOffer', async (req, res) => {
    const { offer_id } = req.body
    const attachment = await attachments.findOneByOffer(offer_id)
    res.json(attachment)
})


router.post('/attachments/findOneByUser', async (req, res) => {
    const { user_id } = req.body
    const attachment = await attachments.findOneByUser(user_id)
    res.json(attachment)
})

module.exports = router