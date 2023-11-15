const {Cities, States} = require('../db')
const cities = {}

async function create(name, state_id){
    const city = await Cities.create({ name: name, state_id: state_id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return city
}

async function findAll(){
    const city = await Cities.findAll({
        include: [{ model: States, attributes: ['id', 'name'] }]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return city
}

cities.create = create
cities.findAll = findAll

module.exports = cities
