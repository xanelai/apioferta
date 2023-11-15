const {Notifications, Users} = require('../db')
const notifications = {}

async function create(title, description, amount, user_id) {
    const notification = await Notifications.create({ title: title, description: description, amount: amount, user_id: user_id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return notification
}

async function findAllByUser(user_id) {
    const notification = await Notifications.findAll({ where: { user_id: user_id }, include: [{ model: Users }] }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return notification
}

async function destroy(id) {
    const notification = await Notifications.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return notification
}

notifications.create = create
notifications.findAllByUser = findAllByUser
notifications.destroy = destroy

module.exports = notifications

