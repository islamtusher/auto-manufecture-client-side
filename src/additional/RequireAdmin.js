import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAdmin from '../Hooks/useAdmin';
import auth from './FirebaseConfig';
import Loading from './Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin()

    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading data='User Loading..'></Loading>
    }
    if (!user || !admin) {
        signOut(auth)
        toast('Bad Authorization')
        return <Navigate to="/" />;
    }
                                          
    return children;
};

export default RequireAdmin;