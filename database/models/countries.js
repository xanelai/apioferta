'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Countries extends Model { }
    Countries.init({
        name: DataTypes.STRING,
        region: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Countries',
        underscored: true
    })
    return Countries
}

