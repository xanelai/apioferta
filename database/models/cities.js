'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Cities extends Model { }
    Cities.init({
        name: DataTypes.STRING,
        state_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Cities',
        underscored: true
    })
    return Cities
}