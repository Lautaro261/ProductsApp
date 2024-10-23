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
        const response = await authLogin(email,password);

        if(!response){
            set({
                status: 'unauthenticated',
                token: undefined,
                user: undefined,
            });
            return false;
        }

        console.log(response);
        set({
            status: 'authenticated',
            token : response.token,
            user: response.user,
        });
        return true;
    },
}));


