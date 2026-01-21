
export enum AuthMode {
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    FORGOT = 'FORGOT'
}

export interface User {
    email: string;
    name: string;
}