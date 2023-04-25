'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Animal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Migration, {
                foreignKey: 'animal_id',
            });
        }
    }
    Animal.init(
        {
            name: {type: DataTypes.STRING, allowNull: false},
            icon: {type: DataTypes.STRING, allowNull: false},
            image: {type: DataTypes.STRING, allowNull: false},
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Animal',
            tableName: 'animal',
            freezeTableName: true,
        }
    );
    return Animal;
};
