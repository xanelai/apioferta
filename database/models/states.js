'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class States extends Model { }
    States.init({
        name: DataTypes.STRING,
        country_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'States',
        underscored: true
    })
    return States
}