const db = require('../../models');
const Migration = db.Migration;

module.exports = {
    getAll,
    getById,
    update,
    delete: _delete
};


async function getAll() {
    return await Migration.findAll()
}

async function getById(id) {
    return await Migration.findByPk(id);
}

async function update(id, migrationParam) {
    const migration = await Migration.findOne({where:{id:id}});
    // validate
    if (!migration) throw 'Migration not found';
    // copy migrationParam properties to migration
    Object.assign(migration, migrationParam);

    await migration.save();
}

async function _delete(id) {
        await Migration.destroy({
            where: {
                id: id
            }
        });
}

