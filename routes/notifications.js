const express = require('express')
const router = express.Router()
const notifications = require('../database/controllers/notifications')


router.post('/notifications/create', async (req, res) => {
    const { title, description, amount, user_id } = req.body
    const notification = await notifications.create(title, description, amount, user_id)
    res.json(notification)
})

router.post('/notifications/findAllByUser', async (req, res) => {
    const { user_id } = req.body
    const notification = await notifications.findAllByUser(user_id)
    res.json(notification)
})

router.post('/notifications/destroy', async (req, res) => {
    const { id } = req.body
    const notification = await notifications.destroy(id)
    res.json(notification)
})

module.exports = router