'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Attachments extends Model { }
    Attachments.init({
        url: DataTypes.STRING,
        search_id: DataTypes.INTEGER,
        offer_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Attachments',
        underscored: true
    })
    return Attachments
}