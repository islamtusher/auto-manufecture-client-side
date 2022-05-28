import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../additional/FirebaseConfig';
import Loading from '../../additional/Loading';
import AboutUs from '../HomeComponents/AboutUs';
import Business from '../HomeComponents/Business';
import Customize from '../HomeComponents/Customize';
import HeroArea from '../HomeComponents/HeroArea';
import Parts from '../HomeComponents/Parts';
import Reviews2 from '../HomeComponents/Reviews2';

const Home = () => {
    const [user, loading] = useAuthState(auth) // current User

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <HeroArea></HeroArea>
            <AboutUs></AboutUs>
            <Parts></Parts>
            <Business></Business>
            {/* <Reviews></Reviews> */}
            <Reviews2></Reviews2>
            <Customize></Customize>
        </div>
    );
};

export default Home;