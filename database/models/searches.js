'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Searches extends Model { }
    Searches.init({
        city_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        description: DataTypes.STRING,
        latency_code: DataTypes.INTEGER,
        state_code: DataTypes.INTEGER,
        close_date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Searches',
        underscored: true
    })
    return Searches
}