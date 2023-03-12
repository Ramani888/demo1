import { connect } from "../db"

export const createFreindDetails = async (data: any, userId: number) => {
    const pool = await connect();
    const query = 'insert into friends (userId, name, number) values ("'+userId+'", "'+data.name+'", "'+data.number+'")';
    // const query = 'insert into friends select top 1 '+userId+', '+data.name+', '+data.number+' from friends where not exists (select * from friends where userId = ' + userId + ' and number = ' + data.number;

    const result: any = await pool.query(query);
    return result?.recordset;
}

export const getFriendsDetails = async () => {
    const pool = await connect();
    const query = 'SELECT * FROM friends';
    const data: any = await pool.query(query);
    return data[0];
}