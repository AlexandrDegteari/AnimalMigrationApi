const migrationService = require('./migration.service');
const express = require('express');
const router = express.Router();
const db = require('../../models');
const Migration = db.Migration;

// routes
router.post('/add', create);
router.get('/', getAll);
router.get('/animal', getAnimalsMigrations);
router.get('/get/:id', getById);
router.put('/put/:id', update);
router.delete('/:id', _delete);

module.exports = router;


async function create(req, res, next) {
    await Migration.create(req.body)
        .then(async item => {
            res.json(item)
        })
        .catch(err => next(err));


    // Migration was created
    // return res.status(201).send(savedMigration)

}


function getAll(req, res, next) {
    Migration.findAll({
            include: {
                model: db.Animal, as: 'Animal',
            }
        }
    )
        .then(users => res.json(users))
        .catch(err => next(err));
}


function getAnimalsMigrations(req, res, next) {
    Migration.findAll({
        include: {
            model: db.Animal, as: 'Animal',
        },
        where: {
            animal_id: req.params.id
        }
    })
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    Migration.findOne({
        where: {id: req.params.id}
    })
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    migrationService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function _delete(req, res, next) {
    migrationService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

module.exports = router;
