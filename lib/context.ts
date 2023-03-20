import {createContext} from 'react';

export const UserContext = createContext({user: null});
export const ClientsContext = createContext({users: [], loading: true, error: null});
