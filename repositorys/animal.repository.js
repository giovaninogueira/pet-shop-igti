import { connect } from "./db.js";

class AnimalRepository {

    async get() {
        const conn = await connect();
        const sqlQuery = 'SELECT * FROM animais';
        const res = await conn.query(sqlQuery);
        return res.rows;
    }

    async find(id) {
        const conn = await connect();
        const sqlQuery = 'SELECT * FROM animais WHERE animal_id=$1';
        const values = [
            id
        ]
        const res = await conn.query(sqlQuery, values);
        return res.rows[0];
    }

    async findByPropt(id) {
        const conn = await connect();
        const sqlQuery = 'SELECT * FROM animais WHERE proprietario_id=$1';
        const values = [
            id
        ]
        const res = await conn.query(sqlQuery, values);
        return res.rows;
    }

    async store(animal) {
        const conn = await connect();
        const sqlQuery = 'INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) returning *';
        const values = [
            animal.nome,
            animal.tipo,
            animal.proprietario_id
        ]
        const res = await conn.query(sqlQuery, values);
        return res.rows[0];
    }

    async update(id, animal) {
        const conn = await connect();
        const sqlQuery = 'UPDATE animais SET nome=$1, tipo=$2, proprietario_id=$3 WHERE animal_id=$4 returning *';
        const values = [
            animal.nome,
            animal.tipo,
            animal.proprietario_id,
            id
        ];
        const res = await conn.query(sqlQuery, values);
        return res.rows[0];
    }

    async delete(id) {
        const conn = await connect();
        const sqlQuery = 'DELETE FROM animais WHERE animal_id=$1 returning *';
        const values = [
            id
        ];
        const res = await conn.query(sqlQuery, values);
    }

}

export default new AnimalRepository();