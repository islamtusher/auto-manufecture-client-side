import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAdmin from '../Hooks/useAdmin';
import auth from './FirebaseConfig';
import Loading from './Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin()

    if (loading || adminLoading) {
        return <Loading data='User Loading..'></Loading>
    }
    if (!admin && user) {
        return <Navigate to="/" />;
    }
    if (!admin) {
        signOut(auth)
        toast('Bad Authorization')
        return <Navigate to="/" />;
    }
                                          
    return children;
};

export default RequireAdmin;