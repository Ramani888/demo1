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