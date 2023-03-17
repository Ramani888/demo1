import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createLoginDetalis, createUserDetails, getUsersDetails } from '../services/user.service';
import { AuthorizedRequest } from '../types/user';
import bcrypt from 'bcrypt';

export const getUsers = async (req: AuthorizedRequest, res: Response) => {
 try {
    const data = await getUsersDetails();
    res.status(StatusCodes.OK).send(data);
 } catch (error) {
   console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({error});
 }
}

export const createUser = async (req: AuthorizedRequest, res: Response) => {
   const bodyData  = req.body;
   try {
      const data = await createUserDetails(bodyData);
      res.status(StatusCodes.OK).send({ success: true });
   } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error })
   }
}

export const createLogin = async (req: AuthorizedRequest, res: Response) => {
   const bodyData  = req.body;
   try {
      const data = await createLoginDetalis(bodyData)

      const password = data[0]?.password;
      const bodyPassword = req?.body?.password;

      if(data.length !== 0) {
         const result: any = await bcrypt.compare(bodyPassword, password).then(function (result) {
            if(result === true) {
               return {success: true}
            } else {
               return {success: false}
            }
         })

         if(data.length !== 0 && result.success) {
            res.status(StatusCodes.OK).send({ success: true, user: data })
         } else {
            res.status(StatusCodes.NOT_FOUND).send({ error: 'password does not match.' })
         }
      }

      if(data.length === 0) {
         res.status(StatusCodes.NOT_FOUND).send({ error: 'user number not found.' })
      }

   } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error })
   }
}