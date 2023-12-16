'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Applications extends Model { }
    Applications.init({
        user_id: DataTypes.INTEGER,
        search_id: DataTypes.INTEGER,
        state_code: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Applications',
        underscored: true
    })
    return Applications
}