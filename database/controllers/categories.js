const {Categories} = require('../db')
const categories = {}

async function create(name, description){
    const category = await Categories.create({ name: name, description: description }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return category
}

async function findAll(){
    const category = await Categories.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return category
}

categories.create = create
categories.findAll = findAll

module.exports = categories