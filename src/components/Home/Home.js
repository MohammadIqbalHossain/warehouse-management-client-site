import React from 'react';
import Intructions from '../Intructions/Intructions';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Works from '../works/Works';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="bg-gray-800 text-white">
            <Banner />
            <Inventory />
            <Works />
            <Intructions />
           
        </div>
    );
};

export default Home;