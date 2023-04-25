'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'animal',
            [
                {
                    name: 'rabbit',
                    icon: 'icon/rabbit.png',
                    image: 'img/rabbit.jpeg',
                    createdAt: "2022-12-13T01:38:08.272Z",
                    updatedAt: "2022-12-13T01:38:08.272Z"
                },
                {
                    name: 'bird',
                    icon: 'icon/bird.png',
                    image: 'img/bird.jpeg',
                    createdAt: "2022-12-13T01:38:08.272Z",
                    updatedAt: "2022-12-13T01:38:08.272Z"
                },
                {
                    name: 'bear',
                    icon: 'icon/bear.png',
                    image: 'img/bear.jpeg',
                    createdAt: "2022-12-13T01:38:08.272Z",
                    updatedAt: "2022-12-13T01:38:08.272Z"
                },

            ], {}
        );

        await queryInterface.bulkInsert(
            'migration',
            [
                {
                    animal_id: 1,
                    quantity: 40,
                    positionLat: 60.400453738514290,
                    positionLng: 15.125776621093730,
                    date: "2023/04/16",
                },
                {
                    animal_id: 1,
                    quantity: 140,
                    positionLat: 58.336728455904786,
                    positionLng: 16.093696542968736,
                    date: "2023/04/16",
                },
                {
                    animal_id: 1,
                    quantity: 10,
                    positionLat: 59.244591110001101,
                    positionLng: 15.913240110001101,
                    date: "2023/04/16",
                },
                {
                    animal_id: 2,
                    quantity: 10,
                    positionLat: 59.164591110001101,
                    positionLng: 17.803240110001101,
                    date: "2023/04/16",
                },
                {
                    animal_id: 2,
                    quantity: 20,
                    positionLat: 59.204591110001101,
                    positionLng: 18.523240110001101,
                    date: "2023/04/16",
                },
                {
                    animal_id: 2,
                    quantity: 30,
                    positionLat: 59.903063731950491,
                    positionLng: 16.002148691406236,
                    date: "2023/04/16",
                },
                {
                    animal_id: 3,
                    quantity: 15,
                    positionLat: 59.345326795924790,
                    positionLng: 15.593242441406230,
                    date: "2023/04/16",
                },
                {
                    animal_id: 3,
                    quantity: 85,
                    positionLat: 58.918828627869760,
                    positionLng: 15.157612558593730,
                    date: "2023/04/16",
                },
                {
                    animal_id: 3,
                    quantity: 60,
                    positionLat: 59.373288353846486,
                    positionLng: 17.506440683593736,
                    date: "2023/04/16",
                },
                {
                    animal_id: 1,
                    quantity: 40,
                    positionLat: 60.500453738514290,
                    positionLng: 15.125776621093730,
                    date: "2023/04/17",
                },
                {
                    animal_id: 1,
                    quantity: 140,
                    positionLat: 58.336728455904786,
                    positionLng: 16.193696542968736,
                    date: "2023/04/17",
                },
                {
                    animal_id: 1,
                    quantity: 10,
                    positionLat: 59.244591110001101,
                    positionLng: 16.013240110001101,
                    date: "2023/04/17",
                },
                {
                    animal_id: 2,
                    quantity: 10,
                    positionLat: 59.334591110001101,
                    positionLng: 18.003240110001101,
                    date: "2023/04/17",
                },
                {
                    animal_id: 2,
                    quantity: 20,
                    positionLat: 59.304591110001101,
                    positionLng: 18.523240110001101,
                    date: "2023/04/17",
                },
                {
                    animal_id: 2,
                    quantity: 30,
                    positionLat: 60.003063731950490,
                    positionLng: 16.032148691406236,
                    date: "2023/04/17",
                },
                {
                    animal_id: 3,
                    quantity: 15,
                    positionLat: 59.445326795924790,
                    positionLng: 15.553242441406230,
                    date: "2023/04/17",
                },
                {
                    animal_id: 3,
                    quantity: 85,
                    positionLat: 58.818828627869760,
                    positionLng: 15.257612558593730,
                    date: "2023/04/17",
                },
                {
                    animal_id: 3,
                    quantity: 60,
                    positionLat: 59.473288353846486,
                    positionLng: 17.606440683593736,
                    date: "2023/04/17",
                },
                {
                    animal_id: 1,
                    quantity: 40,
                    positionLat: 60.700453738514290,
                    positionLng: 15.925776621093730,
                    date: "2023/04/18",
                },
                {
                    animal_id: 1,
                    quantity: 140,
                    positionLat: 58.536728455904786,
                    positionLng: 16.093696542968736,
                    date: "2023/04/18",
                },
                {
                    animal_id: 1,
                    quantity: 10,
                    positionLat: 59.344591110001101,
                    positionLng: 16.063240110001101,
                    date: "2023/04/18",
                },
                {
                    animal_id: 2,
                    quantity: 10,
                    positionLat: 60.334591110001101,
                    positionLng: 18.063240110001101,
                    date: "2023/04/18",
                },
                {
                    animal_id: 2,
                    quantity: 20,
                    positionLat: 59.334591110001101,
                    positionLng: 18.563240110001101,
                    date: "2023/04/18",
                },
                {
                    animal_id: 2,
                    quantity: 30,
                    positionLat: 60.07306373195049,
                    positionLng: 16.13214869140623,
                    date: "2023/04/18",
                },
                {
                    animal_id: 3,
                    quantity: 15,
                    positionLat: 59.74532679592479,
                    positionLng: 15.25324244140623,
                    date: "2023/04/18",
                },
                {
                    animal_id: 3,
                    quantity: 85,
                    positionLat: 58.91882862786976,
                    positionLng: 15.35761255859373,
                    date: "2023/04/18",
                },
                {
                    animal_id: 3,
                    quantity: 60,
                    positionLat: 59.573288353846486,
                    positionLng: 17.906440683593736,
                    date: "2023/04/18",
                },
                {
                    animal_id: 1,
                    quantity: 40,
                    positionLat: 60.700453738514290,
                    positionLng: 15.925776621093730,
                    date: "2023/04/19",
                },
                {
                    animal_id: 1,
                    quantity: 140,
                    positionLat: 58.536728455904786,
                    positionLng: 16.093696542968736,
                    date: "2023/04/19",
                },
                {
                    animal_id: 1,
                    quantity: 10,
                    positionLat: 59.344591110001101,
                    positionLng: 16.063240110001101,
                    date: "2023/04/19",
                },
                {
                    animal_id: 2,
                    quantity: 10,
                    positionLat: 60.334591110001101,
                    positionLng: 18.063240110001101,
                    date: "2023/04/19",
                },
                {
                    animal_id: 2,
                    quantity: 20,
                    positionLat: 59.334591110001101,
                    positionLng: 18.563240110001101,
                    date: "2023/04/19",
                },
                {
                    animal_id: 2,
                    quantity: 30,
                    positionLat: 60.07306373195049,
                    positionLng: 16.13214869140623,
                    date: "2023/04/19",
                },
                {
                    animal_id: 3,
                    quantity: 15,
                    positionLat: 59.74532679592479,
                    positionLng: 15.25324244140623,
                    date: "2023/04/19",
                },
                {
                    animal_id: 3,
                    quantity: 85,
                    positionLat: 58.91882862786976,
                    positionLng: 15.35761255859373,
                    date: "2023/04/19",
                },
                {
                    animal_id: 3,
                    quantity: 60,
                    positionLat: 59.573288353846486,
                    positionLng: 17.906440683593736,
                    date: "2023/04/19",
                },
                {
                    animal_id: 1,
                    quantity: 40,
                    positionLat: 60.700453738514290,
                    positionLng: 15.925776621093730,
                    date: "2023/04/20",
                },
                {
                    animal_id: 1,
                    quantity: 140,
                    positionLat: 58.536728455904786,
                    positionLng: 16.093696542968736,
                    date: "2023/04/20",
                },
                {
                    animal_id: 1,
                    quantity: 10,
                    positionLat: 59.344591110001101,
                    positionLng: 16.063240110001101,
                    date: "2023/04/20",
                },
                {
                    animal_id: 2,
                    quantity: 10,
                    positionLat: 60.334591110001101,
                    positionLng: 18.063240110001101,
                    date: "2023/04/20",
                },
                {
                    animal_id: 2,
                    quantity: 20,
                    positionLat: 59.334591110001101,
                    positionLng: 18.563240110001101,
                    date: "2023/04/20",
                },
                {
                    animal_id: 2,
                    quantity: 30,
                    positionLat: 60.07306373195049,
                    positionLng: 16.13214869140623,
                    date: "2023/04/20",
                },
                {
                    animal_id: 3,
                    quantity: 15,
                    positionLat: 59.74532679592479,
                    positionLng: 15.25324244140623,
                    date: "2023/04/20",
                },
                {
                    animal_id: 3,
                    quantity: 85,
                    positionLat: 58.91882862786976,
                    positionLng: 15.35761255859373,
                    date: "2023/04/20",
                },
                {
                    animal_id: 3,
                    quantity: 60,
                    positionLat: 59.573288353846486,
                    positionLng: 17.906440683593736,
                    date: "2023/04/20",
                },

            ], {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('animals', null, bulkDeleteOptions);
        await queryInterface.bulkDelete('animals_group', null, bulkDeleteOptions);
        await queryInterface.bulkDelete('migrations', null, bulkDeleteOptions);
    },
};
