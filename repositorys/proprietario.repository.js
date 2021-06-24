import { connect } from "./db.js";

class ProprietarioRepository {

    async get() {
        const conn = await connect();
        const sqlQuery = 'SELECT * FROM proprietarios';
        const res = await conn.query(sqlQuery);
        return res.rows;
    }

    async find(id) {
        const conn = await connect();
        const sqlQuery = 'SELECT * FROM proprietarios WHERE proprietario_id=$1';
        const values = [
            id
        ]
        const res = await conn.query(sqlQuery, values);
        return res.rows[0];
    }

    async store(proprietario) {
        const conn = await connect();
        const sqlQuery = 'INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) returning *';
        const values = [
            proprietario.nome,
            proprietario.telefone
        ]
        const res = await conn.query(sqlQuery, values);
        return res.rows[0];
    }

    async update(id, proprietario) {
        const conn = await connect();
        const sqlQuery = 'UPDATE proprietarios SET nome=$1, telefone=$2 WHERE proprietario_id=$3 returning *';
        const values = [
            proprietario.nome,
            proprietario.telefone,
            id
        ];
        const res = await conn.query(sqlQuery, values);
        return res.rows[0];
    }

    async delete(id) {
        const conn = await connect();
        const sqlQuery = 'DELETE FROM proprietarios WHERE proprietario_id=$1 returning *';
        const values = [
            id
        ];
        const res = await conn.query(sqlQuery, values);
    }

}

export default new ProprietarioRepository();