'use strict';
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class BidderApplications extends Model { }
    BidderApplications.init({
        rut: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING },
        address: { type: DataTypes.STRING },
        city_id: {
            allowNull: true,
            unique: false,
            type: DataTypes.INTEGER,
            onDelete: 'SET NULL',
            references: {
                model: 'cities',
                key: 'id'
            }
        },
        category_id: {
            allowNull: true,
            unique: false,
            type: DataTypes.INTEGER,
            onDelete: 'SET NULL',
            references: {
                model: 'categories',
                key: 'id'
            }
        },
        state: { type: DataTypes.BOOLEAN },
    }, {
        sequelize,
        modelName: 'BidderApplications',
        underscored: true
    })
    return Bidders
}