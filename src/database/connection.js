import  sql from 'mssql'

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    //instance: 'instance-name',
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT | 0,
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.error({databaseConnectionError: error})
    }
}

export {sql}
// getConnection()

