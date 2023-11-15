'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Profiles extends Model { }
    Profiles.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Profiles',
        underscored: true
    })
    return Profiles
}