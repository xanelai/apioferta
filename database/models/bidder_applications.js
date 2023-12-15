'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class BidderApplications extends Model { }
    BidderApplications.init({
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        plan: { type: DataTypes.STRING },
        status: { type: DataTypes.BOOLEAN, defaultValue: false },
        expiration_date: { type: DataTypes.DATE },

    }, {
        sequelize,
        modelName: 'BidderApplications',
        underscored: true
    })
    return BidderApplications
}