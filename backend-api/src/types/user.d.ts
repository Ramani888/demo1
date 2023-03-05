type AuthorizedRequest = Express.Request & ?({ headers: { authorization: string } } & ?{ userData: JwtSign });

declare namespace Express {
  type Request = AuthorizedRequest;
}

export type UserJwt = {
  firstName?: string;
  lastName?: string;
  id?: number;
  roleId: number;
  customerId: number;
  dataModelId: number;
  exp?: number;
};

export interface IUser {
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  password: string;
}