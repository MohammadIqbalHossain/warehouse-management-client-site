import React from 'react';

const works = () => {
    return (
        <div>
            <h1 className="text-5xl md:my-20">How It Works</h1>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex md:w-[400px] text-left">
                    <h1 className="text-8xl m-10 font-extrabold text-yellow-200">1</h1>
                    <p>Connect your e-Commerce store(s) to ShipDaddy’s web-based software in a few simple clicks. Your team will be able to oversee multiple store locations in one easy to use web portal.</p>
                </div>

                <div className="flex md:w-[400px] text-left">
                    <h1 className="text-8xl m-10 font-extrabold text-yellow-200">2</h1>
                    <p>Ship your product to ShipDaddy. We'll take over the fulfillment side while you manage and edit orders, oversee inventory levels, receive notifications for stock needing replenishment, and automate shipping tasks.</p>
                </div>

                <div className="flex md:w-[400px] text-left">
                    <h1 className="text-8xl m-10 font-extrabold text-yellow-200">3</h1>
                    <p>Your dedicated account team will always be one Slack message away while your product is being shipped, same day, to all of your happy customers!</p>
                </div>
            </div>
        </div>
    );
};

export default works;
