import { useContext } from 'react';
import { AuthContext } from './context';

// hook
export const useAuthContext = () => useContext(AuthContext);
