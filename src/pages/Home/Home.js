import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';
import Business from '../HomeComponents/Business';
import HeroArea from '../HomeComponents/HeroArea';
import Parts from '../HomeComponents/Parts';

const Home = () => {
    const [user, loading] = useAuthState(auth) // current User

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <HeroArea></HeroArea>
            <Parts></Parts>
            <Business></Business>
        </div>
    );
};

export default Home;