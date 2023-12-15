const {BidderApplications} = require('../db')
const bidderApplications = {}

async function create(user_id, plan, expiration_date) {
    const bidderApplication = await BidderApplications.create({
        user_id: user_id,
        plan: plan,
        expiration_date: expiration_date
    }).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return bidderApplication
}

async function findAll() {
    const bidderApplication = await BidderApplications.findAll().then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return bidderApplication
}

async function findOne(id) {
    const bidderApplication = await BidderApplications.findOne({where: {id: id}}).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return bidderApplication
}

async function findOneByUser(user_id) {
    const bidderApplication = await BidderApplications.findOne({where: {user_id: user_id}}).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return bidderApplication
}

bidderApplications.create = create
bidderApplications.findAll = findAll
bidderApplications.findOne = findOne
bidderApplications.findOneByUser = findOneByUser

module.exports = bidderApplications