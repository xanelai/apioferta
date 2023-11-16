const {Offers} = require('../db')
const offers = {}

async function create(search_id, user_id, amount, description, state_code) {
    const offer = await Offers.create({
        search_id: search_id,
        user_id: user_id,
        amount: amount,
        description: description,
        state_code: state_code,
    }).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return offer
}

async function findAllBySearch(search_id) {
    const offer = await Offers.findAll({
        where: {search_id: search_id},
    }).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return offer
}

async function findOneBySearchAndUser(search_id, user_id) {
    const offer = await Offers.findOne({
        where: {search_id: search_id, user_id: user_id},
    }).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return offer
}

async function findOneSelectedBySearch(search_id) {
    const offer = await Offers.findOne({
        where: {search_id: search_id, state_code: 1},
    }).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return offer
}

async function acceptOffer(offer_id) {
    const offer = await Offers.update({
        state_code: 1,
    }, {
        where: {id: offer_id}
    }).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return offer
}

offers.create = create
offers.findAllBySearch = findAllBySearch
offers.findOneBySearchAndUser = findOneBySearchAndUser
offers.findOneSelectedBySearch = findOneSelectedBySearch
offers.acceptOffer = acceptOffer

module.exports = offers