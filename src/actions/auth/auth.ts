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


export const authCheckStatus = async ()=>{
  try {

    const {data} = await apiAxiosCustom.get<AuthResponse>('/auth/check-status');
    return returnUserToken(data);

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authRegister = async(fullName: string, email:string, password:string) => {
  email = email.toLowerCase();

  try {
    console.log({
      fullName,
      email,
      password,
    });
    const { data } = await apiAxiosCustom.post<AuthResponse>('/auth/register',{
      fullName,
      email,
      password,
    });

    return returnUserToken(data);

  } catch (error) {
    console.log(error);
    return null;
  }
};
