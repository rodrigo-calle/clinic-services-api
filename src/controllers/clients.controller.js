import { getConnection, queries } from '../database'

export const getClients = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getAllClients)
    console.log(result)
    
    res.json(result.recordset);
}