'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('animal', {
            id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
            name: {type: Sequelize.STRING},
            icon: {type: Sequelize.STRING},
            image: {type: Sequelize.STRING},
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                // defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                // defaultValue: Sequelize.NOW,
            },
        });

        await queryInterface.createTable('migration', {
            id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false},
            quantity: {type: Sequelize.INTEGER, allowNull: false},
            animal_id: {type: Sequelize.INTEGER, allowNull: false},
            positionLat: {type: Sequelize.FLOAT, allowNull: false},
            positionLng: {type: Sequelize.FLOAT, allowNull: false},
            date: {type: Sequelize.DATE, allowNull: false},
            // createdAt: {
            //     allowNull: false,
            //     type: Sequelize.DATE,
            // },
            // updatedAt: {
            //     allowNull: false,
            //     type: Sequelize.DATE,
            // },
        });
    },
    down: async (queryInterface, Sequelize) => {
        // we can do this because it is the first migration
        await queryInterface.dropAllTables();
    },
};
