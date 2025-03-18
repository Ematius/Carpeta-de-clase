
type Role = 'USER' | 'ADMIN' | 'ADMIN';


export type User = {
  id: string;
  email: string;
  name: string;
  handleName: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: Role;
};

export type DTOUser = {

  email: string;
  name: string;
  handleName: string;
  password: string;
  firstName: string;
  lastName: string;

};
