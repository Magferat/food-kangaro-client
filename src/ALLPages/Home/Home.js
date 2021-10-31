import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import AllItems from '../FoodItems/AllItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllItems />
            <AboutUs />
        </div>
    );
};

export default Home;