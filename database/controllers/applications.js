const { Applications, Searches, Categories, Cities } = require('../db')
const applications = {}

async function create(search_id, user_id, state_code) {
    const application = await Applications.create({
        user_id: user_id,
        search_id: search_id,
        state_code: state_code,
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

async function findAllByUser(user_id) {
    const application = await Applications.findAll({
        where: { user_id: user_id },
        include: [
            { model: Searches },
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

async function findAllWaitingByUser(user_id) {
    const application = await Applications.findAll({
        where: { user_id: user_id, state_code: 0 },
        include: [
            { model: Searches, include: [
                { model: Categories },
                { model: Cities },
            ]  },
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

async function findAllOffersByUser(user_id) {
    const application = await Applications.findAll({
        where: { user_id: user_id, state_code: 1 },
        include: [
            { model: Searches, include: [
                { model: Categories },
                { model: Cities },
            ]  },
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

async function findAllAwardedByUser(user_id) {
    const application = await Applications.findAll({
        where: { user_id: user_id, state_code: 2 },
        include: [
            { model: Searches, include: [
                { model: Categories },
                { model: Cities },
            ]  },
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

async function update(id, state_code) {
    const application = await Applications.update({ state_code: state_code }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

async function destroy(id) {
    const application = await Applications.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

async function findOneBySearchAndUser(search_id, user_id) {
    const application = await Applications.findOne({
        where: { search_id: search_id, user_id: user_id },
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return application
}

applications.create = create
applications.findAllByUser = findAllByUser
applications.findAllWaitingByUser = findAllWaitingByUser
applications.findAllOffersByUser = findAllOffersByUser
applications.findAllAwardedByUser = findAllAwardedByUser
applications.update = update
applications.destroy = destroy
applications.findOneBySearchAndUser = findOneBySearchAndUser

module.exports = applications

