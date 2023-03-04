import { AuthorizedRequest } from '../types/users';
import { Request, Response } from 'express';
import { StatusCodes, UNAUTHORIZED } from 'http-status-codes';
import { getUserDetails } from '../services/user.service';

export const getUsers = async (req: AuthorizedRequest, res: Response) => {
    try {
        const data = await getUserDetails();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
    }
}