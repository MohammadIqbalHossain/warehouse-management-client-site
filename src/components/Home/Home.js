import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div className="bg-gray-800 text-white">
            <Banner />
            <Inventory />
        </div>
    );
};

export default Home;