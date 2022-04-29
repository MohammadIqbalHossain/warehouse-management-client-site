import React from 'react';
import banner from '../../images/banner.webp';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row mx-10 items-center ">
            <div className="md:w-[600px]">
                <h1 className="text-4xl text-left font-bold my-4">International fulfilment solutions for you'r business needs.</h1>
                <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto labore accusantium corporis numquam unde voluptas aperiam eaque laborum, placeat temporibus ipsam esse sunt minus eius blanditiis vitae quis perferendis!</p>
            </div>
            <div>
                <img src={banner} alt="bannerVector" />
            </div>
        </div>
    );
};

export default Banner;