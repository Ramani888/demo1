import { StatusCodes } from "http-status-codes";
import { AuthorizedRequest } from "../types/user";
import { Response } from 'express';
import { createGroupDetails, deleteGroupAndGroupDetailData, getGroupAndGroupDetailsData, getGroupsData, insertGroupAndGroupDetailsData, updateGroupData } from "../services/group.service";

export const createGroup = async (req: AuthorizedRequest, res: Response) => {
    const bodyData = req.body;
    const userId = 1;
    try {
        const data = await createGroupDetails(bodyData, userId);
        res.status(StatusCodes.OK).send({ success: true })
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err });
    }
}

export const getGroups = async (req: AuthorizedRequest, res: Response) => {
    try {
        const data = await getGroupsData();
        res.status(StatusCodes.OK).send(data)
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })
    }
}

export const getGroupAndGroupDetails = async (req: AuthorizedRequest, res: Response) => {
    const { groupId } = req.query;
    try {
        const data = await getGroupAndGroupDetailsData(groupId);
        res.status(StatusCodes.OK).send(data)
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })
    }
}

export const insertGroupAndGroupDetails = async (req: AuthorizedRequest, res: Response) => {
    const bodyData = req.body;
    const { groupId } = req.query;
    try {
        bodyData?.map(async (item: any) => {
            await insertGroupAndGroupDetailsData(groupId, item);
        })
        res.status(StatusCodes.OK).send({ success: true })
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })
    }
}

export const deleteGroupAndGroupDetail = async (req: AuthorizedRequest, res: Response) => {
    const { id } = req.query;
    try {
        const data = await deleteGroupAndGroupDetailData(id);
        res.status(StatusCodes.OK).send({ success: true })
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })
    }
}

export const updateGroup = async (req: AuthorizedRequest, res: Response) => {
    const { id } = req.query;
    const bodyData = req.body;
    try {
        await updateGroupData(id, bodyData);
        res.status(StatusCodes.OK).send({ success: true })
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err });
    }
}