// import { getConnection } from "../database/connection";
import {getConnection, queries} from '../database'

export const loginSet = async (req, res) => {
    const { ruc, password } = req.body;

    if (ruc === null || password === null) {
        return res.status(400).json({msg: 'Bad request, please fill all fields'});
    }

    if(ruc !== password) {
        return res.status(400).json({msg: 'Invalid credentials'})
    }

    // const queryText = `SELECT * FROM Cliente WHERE NroRuc = '${ruc}'`
    try {
    
        const pool = await getConnection()
        const result = await pool
            .request()
            .input("ruc", ruc)
            .query(queries.loginClient)
    
        if(result.recordset.length === 0) {
            return res.status(400).json({msg: 'Invalid user credentials'})
        }
        return res.status(200).json(result.recordset)
        
    } catch (error) {
        return res.status(400).json(error)
    }
}