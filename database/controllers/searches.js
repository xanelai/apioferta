const { Searches, Users, Categories, Cities, States, Countries, Offers } = require('../db')
const searches = {}
const moment = require('moment')


const latencyOptionsList = [
    { id: 0, key: 0, label: '1 hora', value: 1, unit: 'hours' },
    { id: 1, key: 1, label: '2 horas', value: 2, unit: 'hours' },
    { id: 2, key: 2, label: '3 horas', value: 3, unit: 'hours' },
    { id: 3, key: 3, label: '1 día', value: 24, unit: 'hours' },
    { id: 4, key: 4, label: '2 días', value: 48, unit: 'hours' },
    { id: 5, key: 5, label: '3 días', value: 72, unit: 'hours' },
]

const closeDate = (latencyCode) => {
    const selectedOption = latencyOptionsList.find((option) => option.key === latencyCode);
    if (selectedOption) {
        return moment().add(selectedOption.value, selectedOption.unit)
    }
    return null
}


async function create(city_id, category_id, user_id, description, latency_code, state_code) {
    const search = await Searches.create({
        city_id: city_id,
        category_id: category_id,
        user_id: user_id,
        description: description,
        latency_code: latency_code,
        state_code: state_code,
        close_date: closeDate(latency_code)
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

async function findAllByUser(user_id) {
    const search = await Searches.findAll({
        where: { user_id: user_id },
        include: [
            { model: Users },
            { model: Categories },
            {
                model: Cities, include: [
                    { model: States, include: [{ model: Countries }] }
                ]
            }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

async function findAll() {
    const search = await Searches.findAll({
        include: [
            { model: Users },
            { model: Categories },
            {
                model: Cities, include: [
                    {
                        model: States, include: [{ model: Countries }]
                    }
                ]
            }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

async function findAllWaitingByUser(user_id) {
    const search = await Searches.findAll({
        where: { user_id: user_id, state_code: 0 },
        include: [
            { model: Users },
            { model: Categories },
            {
                model: Cities, include: [
                    { model: States, include: [{ model: Countries }] }
                ]
            },

        ],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

async function findAllOffersByUser(user_id) {
    const search = await Searches.findAll({
        where: { user_id: user_id, state_code: 1 },
        include: [
            { model: Users },
            { model: Categories },
            {
                model: Cities, include: [
                    { model: States, include: [{ model: Countries }] }
                ]
            }
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

async function findAllClosedByUser(user_id) {
    const search = await Searches.findAll({
        where: { user_id: user_id, state_code: [2, 3, 4] },
        include: [
            { model: Users },
            { model: Categories },
            {
                model: Cities, include: [
                    { model: States, include: [{ model: Countries }] }
                ]
            }
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}


async function updateCloseDate(id, close_date) {
    const search = await Searches.update({ close_date: close_date }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

const updateState = async (id, state_code) => {
    const search = await Searches.update({ state_code: state_code }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

async function findOneById(id) {
    const search = await Searches.findOne({
        where: { id: id },
        include: [
            { model: Users },
            { model: Categories },
            {
                model: Cities, include: [
                    { model: States, include: [{ model: Countries }] }
                ]
            }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return search
}

async function destroy (id) {
    const search = await Searches.destroy({where: {id: id}}).then(data => {return {'code': 1, 'data': data}}).catch(err => {return {'code': 0, 'data': err}})
    return search
}


searches.create = create
searches.findAllByUser = findAllByUser
searches.findAll = findAll
searches.findAllWaitingByUser = findAllWaitingByUser
searches.findAllOffersByUser = findAllOffersByUser
searches.findAllClosedByUser = findAllClosedByUser
searches.updateCloseDate = updateCloseDate
searches.updateState = updateState
searches.findOneById = findOneById
searches.destroy = destroy

module.exports = searches