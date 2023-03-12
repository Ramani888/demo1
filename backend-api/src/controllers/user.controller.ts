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
   console.log('body data', bodyData)
   try {
      const data = await createLoginDetalis(bodyData)
      console.log('data', data)

   //    const comparePassword = async (plaintextPassword: any, hash: any) =>  {
   //       bcrypt.compare(plaintextPassword, hash)
   //       .then(result => {
   //       return result
   //       })
   //       .catch(err => {
   //       console.log(err)
   //       })
   //    }

   // let password;
 
   //  if (bodyData.password === 'string') {
   //      password = bodyData.password;
   //  }
   //  else {
   //      password = bodyData.password.toString();
   //  }

   //  const Encrypt = {

   //      cryptPassword: (password: string) =>
   //          bcrypt.genSalt(10)
   //          .then((salt => bcrypt.hash(password, salt)))
   //          .then(hash => hash),
        
   //          comparePassword: (password: string, hashPassword: string) =>
   //              bcrypt.compare(password, hashPassword)
   //              .then(resp => resp)
        
   //      }

   //  const myEncryptPassword = await Encrypt.comparePassword(password, data.password);
   //  console.log('myEncryptPassword', myEncryptPassword)
//    const p1 = bcrypt.compare(password, data.password, function(err, result) {
//       return result
//   });
//   console.log('p1', p1);
//    const match = await bcrypt.compare(password, data?.password);
//    console.log('match', match)
//    const result = await comparePassword(password, data?.password)
//    console.log('result', result)

      res.status(StatusCodes.OK).send({ success: true });
   } catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error })
   }
}