import { StatusCodes } from "http-status-codes";
import { AuthorizedRequest } from "../types/user";
import { Response } from 'express';
import { createFreindDetails, getFriendsDetails } from "../services/friend.service";

export const createFreind = async (req: AuthorizedRequest, res: Response) => {
    const bodyData = req.body;
    const userId = 1;
    try {
        const data = await createFreindDetails(bodyData, userId);
        res.status(StatusCodes.OK).send({ success: true });
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err });
    }
}

export const getFriends = async (req: AuthorizedRequest, res: Response) => {
    try {
        const data = await getFriendsDetails();
        res.status(StatusCodes.OK).send(data);
    } catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err });
    }
}