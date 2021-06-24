import pg from "pg";

async function connect() {
    if (!global.connection) {
        const pool = new pg.Pool({
            connectionString: ''
        });
        global.connection = pool;
        return pool.connect();
    }
    return global.connection.connect();
}

export {
    connect
}