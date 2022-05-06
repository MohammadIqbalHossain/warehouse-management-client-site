import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Intructions = () => {
    return (
        <div className="p-20">
            <h2 className="text-5xl my-10">Shipping Instructions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center ">
                <div className="md:w-[600px] text-left border-2 border-gray-200 md:p-20 mx-10 md:mx-0 p-10">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><FaBeer className="mr-5 text-5xl" color="yellow" /> Same Day Fulfillment</h2>
                    <p>ShipDaddy’s same day fulfillment cuts down on lengthy shipping and delivery time to customers. With same day shipping, your orders get out the door faster.</p>
                </div>
                <div className="md:w-[600px] text-left border-2 border-gray-200 mx-10 md:mx-0 p-10 md:p-20">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><FaBeer className="mr-5 text-5xl" color="yellow" /> Same Day Fulfillment</h2>
                    <p>ShipDaddy’s same day fulfillment cuts down on lengthy shipping and delivery time to customers. With same day shipping, your orders get out the door faster.</p>
                </div>
                <div className="md:w-[600px] text-left border-2 border-gray-200 mx-10 md:mx-0 p-10 md:p-20">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><FaBeer className="mr-5 text-5xl" color="yellow" /> Same Day Fulfillment</h2>
                    <p>ShipDaddy’s same day fulfillment cuts down on lengthy shipping and delivery time to customers. With same day shipping, your orders get out the door faster.</p>
                </div>
                <div className="md:w-[600px] text-left border-2 border-gray-200 mx-10 md:mx-0 p-10 md:p-20">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><FaBeer className="mr-5 text-5xl" color="yellow" /> Same Day Fulfillment</h2>
                    <p>ShipDaddy’s same day fulfillment cuts down on lengthy shipping and delivery time to customers. With same day shipping, your orders get out the door faster.</p>
                </div>
            </div>
        </div>
    );
};

export default Intructions; 