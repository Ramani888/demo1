import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getUsersDetails } from '../services/user.service';
import { AuthorizedRequest } from '../types/user';

export const getUsers = async (req: AuthorizedRequest, res: Response) => {
 try {
    const data = await getUsersDetails();
    res.status(StatusCodes.OK).send(data);
 } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error});
 }
}