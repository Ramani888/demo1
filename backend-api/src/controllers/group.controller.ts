import { StatusCodes } from "http-status-codes";
import { AuthorizedRequest } from "../types/user";
import { Response } from 'express';
import { createGroupDetails, getGroupsData } from "../services/group.service";

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