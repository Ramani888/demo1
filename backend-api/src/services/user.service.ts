import { connect } from "../db"

export const getUsersDetails = async () => {
    const pool = await connect();
    const query = 'select * from user';
    const data: any = await (await pool.query(query))
    return data[0];
}