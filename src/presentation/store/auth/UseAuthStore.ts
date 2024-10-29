/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import {User} from '../../../domain/entities/user';
import {AuthStatus} from '../../../infrastructure/interfaces/auth.status';
import { authLogin } from '../../../actions/auth/auth';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  login: (email:string, password:string)=>Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get)=>({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async(email: string, password: string) => {
        console.log(`LOGIN - email:${email}`);
        console.log(`LOGIN - password:${password}`);
        const response = await authLogin(email,password);
        console.log('linea 23',response);
        if(!response){
            console.log('entré al if');
            set({
                status: 'unauthenticated',
                token: undefined,
                user: undefined,
            });
            return false;
        }

        console.log('linea 33',response);
        set({
            status: 'authenticated',
            token : response.token,
            user: response.user,
        });
        return true;
    },
}));


