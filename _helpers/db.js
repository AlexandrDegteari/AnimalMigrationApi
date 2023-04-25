const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// module.exports = sequelize;

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'qpos',
    username: 'degtearialexandr',
    password: 'qwerty',
    host: 'localhost',
    define: {

        // freezeTableName: true,
        // underscored: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
    },
});
module.exports = sequelize;

// module.exports = db;

// https://sequelize.org/v5/manual/upgrade-to-v5.html
/*
options.underscored - Converts all camelCased columns to underscored if true
options.underscoredAll - Converts camelCased model names to underscored table names if true
*/

// module.exports = {
//     User: require('../models/user.model'),
//     Printer: require('../models/printer.model'),
//     Admin: require('../models/admin.model'),
//     Waiter: require('../models/waiter.model'),
//     Business: require('../models/business.model'),
//     Dish: require('../models/dish.model'),
//     Modifier: require('../models/modifier.model'),
//     ModifierOption: require('../models/modifierOption.model'),
//     Menu: require('../models/menu.model'),
//     Order: require('../models/order.model'),
// };


// const sequelize = new Sequelize(database, username, password, {
//     host: db_server,
//     port: port,
//     dialect: "postgres",
// });
//
// const connect = async () => {
//     await sequelize
//         .authenticate()
//         .then(() => {
//             console.log("Connection has been established successfully.");
//         })
//         .catch((err) => {
//             console.log("Unable to connect to the database:", err.message);
//         });
// };
// const db = {
//     sequelize: sequelize,
//     connect,
// };
//
// module.exports = db;
