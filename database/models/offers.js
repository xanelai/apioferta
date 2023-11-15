
'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Offers extends Model { }
    Offers.init({
        search_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        description: DataTypes.STRING,
        state_code: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Offers',
        underscored: true
    })
    return Offers
}