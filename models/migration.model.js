'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Migration extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // this.belongsTo(models.Order, {
            //     foreignKey: 'order_id'
            // });
            this.belongsTo(models.Animal, {
                foreignKey: 'animal_id'
            });
        }
    }

    Migration.init(
        {
            animal_id: { type: DataTypes.INTEGER, allowNull: false },
            quantity: {type: DataTypes.INTEGER, allowNull: false},
            positionLat: { type: DataTypes.FLOAT, allowNull: false },
            positionLng: { type: DataTypes.FLOAT, allowNull: false },
            date: { type: DataTypes.DATE, allowNull: false },
            // createdAt: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },
            // updatedAt: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },
        },
        {
            sequelize,
            timestamps: false,
            modelName: 'Migration',
            tableName: 'migration',
            freezeTableName: true,
        }
    );
    return Migration;
};
