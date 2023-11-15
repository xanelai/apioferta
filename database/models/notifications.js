'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Notifications extends Model { }
    Notifications.init({
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Notifications',
        underscored: true
    })
    return Notifications
}