const db = require('../../models');
const Animal = db.Animal;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};


async function getAll() {
    return await Animal.findAll()
}


async function getById(id) {
    return await Animal.findByPk(id);
}


async function create(body) {
    const animal = new Animal({...body});
    // save animal
    await animal.save();
}

async function update(id, animalParam) {
    const animal = await Animal.findOne({where:{id:id}});
    // validate
    if (!animal) throw 'Animal not found';
    // copy animalParam properties to animal
    Object.assign(animal, animalParam);

    await animal.save();
}

async function _delete(id) {
    await Animal.destroy({
        where: {
            id: id
        }
    });
}

