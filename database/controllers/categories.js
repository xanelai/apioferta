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

async function update(id, name, description){
    const category = await Categories.update({ name: name, description: description }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return category
}

const findOneByName = async (name) => {
    const category = await Categories.findOne({
        where: { name: name }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return category
}

categories.create = create
categories.findAll = findAll
categories.update = update
categories.findOneByName = findOneByName

module.exports = categories