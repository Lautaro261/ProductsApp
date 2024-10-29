import {apiAxiosCustom} from '../../config/api/api';
import { User } from '../../domain/entities/user';
import type {AuthResponse} from '../../infrastructure/interfaces/auth.responses';

const returnUserToken = (data: AuthResponse)=>{
    const user : User = {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        isActive: data.isActive,
        roles: data.roles,

    };
    return{
        user: user,
        token: data.token,
    };
};

export const authLogin = async (email: string, password: string) => {
    email = email.toLowerCase();
    console.log('auth.js - linea 22 ',email,password);
  try {
    const {data} = await apiAxiosCustom.post<AuthResponse>('/auth/login', {
      email,
      password,
    });

    return returnUserToken(data);

  } catch (error) {
    console.log(error);
    return null;
  }
};
