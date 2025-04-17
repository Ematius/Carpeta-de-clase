export type Role = 'ADMIN' | 'EDITOR' | 'USER';

export type User = {
  id: string;
  email: string;
  handleName?: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: Role;
  avatar: string;
};

export type DTOUser = {
  email: string;
  handleName?: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: File | null;
};
