import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import AllItems from '../FoodItems/AllItems';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllItems />
            <AboutUs />
            <Review />
        </div>
    );
};

export default Home;