import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Works from '../works/Works';

const Home = () => {
    return (
        <div className="bg-gray-800 text-white">
            <Banner />
            <Inventory />
            <Works />
        </div>
    );
};

export default Home;