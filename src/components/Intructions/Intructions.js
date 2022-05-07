import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { MdOutlineStorage } from 'react-icons/md';
import { SiCampaignmonitor } from 'react-icons/si';
import { FcServices } from 'react-icons/fc';

const Intructions = () => {
    return (
        <div className="p-20">
            <h2 className="text-5xl my-10">Shipping Instructions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center ">
                <div className="w-[300px] md:w-[600px] md:h-[400px] text-left border-2 border-gray-200 md:p-20 mx-10 md:mx-0 p-10">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><FaBeer className="mr-5 text-5xl" color="yellow" /> Same Day Fulfillment</h2>
                    <p>ShipDaddy’s same day fulfillment cuts down on lengthy shipping and delivery time to customers. With same day shipping, your orders get out the door faster. And our instructions to the workers is to give priority of choice to gets it's every single book, so reading for library</p>
                </div>
                <div className=" w-[300px] md:w-[600px] md:h-[400px] text-left border-2 border-gray-200 mx-10 md:mx-0 p-10 md:p-20">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><SiCampaignmonitor className="mr-5 text-5xl" color="yellow" /> Crowdfunding Campaigns</h2>
                    <p>Our 140,000 square foot warehouse facility provides ample space to store your goods. ShipDaddy's monthly storage agreement allows you to comfortably store pallets for an amount of time that works for you without feeling trapped by a long-term contract.</p>
                </div>
                <div className="w-[300px] md:w-[600px] md:h-[400px] text-left border-2 border-gray-200 mx-10 md:mx-0 p-10 md:p-20">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><MdOutlineStorage className="mr-5 text-5xl" color="yellow" /> Dedicated Storage</h2>
                    <p>Leverage ShipDaddy's negotiated shipping rates to ship your orders around the globe. We offer both standard and expedited international shipping options through FedEx, USPS, UPS, and DHL.</p>
                </div>
                <div className="w-[300px] md:w-[600px] md:h-[400px] text-left border-2 border-gray-200 mx-10 md:mx-0 p-10 md:p-20">
                    <h2 className="md:text-3xl text-2xl my-5 flex items-center "><FcServices className="mr-5 text-5xl" color="yellow" /> LTL Freight Services</h2>
                    <p>Booking LTL freight is easy with ShipDaddy's streamlined freight booking service. Provide our operations team the shipping details for your inbound or outbound shipment and they will take care of the rest.</p>
                </div>
            </div>
        </div>
    );
};

export default Intructions; 