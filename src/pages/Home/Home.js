import React from 'react';
import Business from '../HomeComponents/Business';
import HeroArea from '../HomeComponents/HeroArea';
import Parts from '../HomeComponents/Parts';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Parts></Parts>
            <Business></Business>
        </div>
    );
};

export default Home;