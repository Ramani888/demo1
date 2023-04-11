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

export const getGroupAndGroupDetailsData = async (groupId?: number) => {
    const pool = await connect();
    const query = 'select * from `GroupDetails` where `groupId` = "'+groupId+'"';
    const result: any = await pool.query(query);
    return result[0];
}

export const insertGroupAndGroupDetailsData = async (groupId: number, bodyData: any) => {
    const pool = await connect();
    const query = 'insert into `GroupDetails` (`groupId`, `name`, `number`) values ("'+groupId+'", "'+bodyData?.name+'", "'+bodyData?.number+'")';
    const result: any = await pool.query(query);
    return result?.recordset;
}

export const deleteGroupAndGroupDetailData = async (id: number) => {
    const pool = await connect();
    const deleteGroupQuery = 'delete from `groups` where `id` = "'+id+'"';
    const deleteGroupDetailQuery = 'delete from `GroupDetails` where `groupId` = "'+id+'"';
    const result: any = await pool.query(deleteGroupQuery);
    const data: any = await pool.query(deleteGroupDetailQuery);
    return result?.recordset;
}

export const updateGroupData = async (id: number, bodyData: any) => {
    const pool = await connect();
    const query = 'update `groups` set `name` = "'+bodyData?.name+'", `groupType` = "'+bodyData?.groupType+'" where `id` = "'+id+'"';
    const result: any = await pool.query(query);
    return result?.recordset;
}