const express = require('express');
const router = express.Router();
const animalService = require('./animal.service');
const db = require('../../models');
const Animal = db.Animal;

// routes
router.post('/add', add);
router.get('/', getAll);
router.get('/get/:id', getById);
router.put('/put/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function add(req, res, next) {
    animalService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function getAll(req, res, next) {
    Animal.findAll()
    .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    animalService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}


function update(req, res, next) {
    animalService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}


function _delete(req, res, next) {
    animalService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}



module.exports = router;
