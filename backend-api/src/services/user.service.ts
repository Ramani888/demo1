import { connect } from "../db"
import { IUser } from "../types/user";
import bcrypt from 'bcrypt';

export const getUsersDetails = async () => {
    const pool = await connect();
    const query = 'select * from users';
    const data: any = await (await pool.query(query))
    return data[0];
}

export const createUserDetails = async (data: IUser) => {
    const pool = await connect();

    let password;
 
    if (data.password === 'string') {
        password = data.password;
    }
    else {
        password = data.password.toString();
    }

    const Encrypt = {

        cryptPassword: (password: string) =>
            bcrypt.genSalt(10)
            .then((salt => bcrypt.hash(password, salt)))
            .then(hash => hash),
        
            comparePassword: (password: string, hashPassword: string) =>
                bcrypt.compare(password, hashPassword)
                .then(resp => resp)
        
        }

    const myEncryptPassword = await Encrypt.cryptPassword(password);

    const query = 'insert into users (first_name, last_name, mobile, email, password) values ("'+data.first_name+'", "'+data.last_name+'", "'+data.mobile+'", "'+data.email+'", "'+myEncryptPassword+'")';
    const result: any = await pool.query(query);
    return result?.recordset;
}

export const createLoginDetalis = async (data: any) => {
    const pool = await connect();
    const query = 'select * from users where mobile = ' + data.number;
    const result: any = await pool.query(query);
    return result[0];
}