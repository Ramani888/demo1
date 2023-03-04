import {createPool} from 'mysql2/promise'

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'Ramani@7258',
        database: 'demo',
        connectionLimit: 10
    })

    return connection;
}