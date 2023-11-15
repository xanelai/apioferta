const {Countries, States, Cities} = require('../db')
const countries = {}

async function create(name, region){
    const country = await Countries.create({ name: name, region: region }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return country
}

async function findAll(){
    const country = await Countries.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return country
}

countries.create = create
countries.findAll = findAll

module.exports = countries