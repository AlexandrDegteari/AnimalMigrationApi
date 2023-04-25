require('rootpath')();
const express = require('express');
const sequelize = require('_helpers/db');
const app = express();
const cors = require('cors');
const errorHandler = require('_helpers/error-handler');
app.use(express.static('./public'));
app.use(express.json());
app.use(cors());


// api routes

app.use('/migrations', require('./controllers/migrations/migrations.controller'));
app.use('/animals', require('./controllers/animals/animals.controller'));

// global error handler
app.use(errorHandler);

// start server


const server = app.listen({port: 3020}, async () => {
    console.log('Server up on http://localhost:3020')
    await sequelize.authenticate().then(() => console.log('Database Connected!'))
    await sequelize.sync({force: true}).then(() => console.log('Database Sync!'))
})
