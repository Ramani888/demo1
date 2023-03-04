import getPoolConnection from "../config/database"

export const getUserDetails = async () => {
    const pool = getPoolConnection();
    const query = 'select * from user';
    const data = await pool.query(query);
    return data?.recordset;
}