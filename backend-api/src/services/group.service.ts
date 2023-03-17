import { connect } from "../db";

export const createGroupDetails = async (data: any, userId: number) => {
    const pool = await connect();
    const query = 'insert into `Groups` (`userId`, `name`, `groupType`) values ("'+userId+'", "'+data.name+'", "'+data.groupType+'")';
    const result: any = await pool.query(query);
    return result?.recordset;
}

export const getGroupsData = async () => {
    const pool = await connect();
    const query = 'select * from `groups`';
    const result: any = await pool.query(query);
    return result[0];
}