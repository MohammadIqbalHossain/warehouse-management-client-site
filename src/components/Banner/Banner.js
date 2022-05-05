import React from 'react';
import banner from '../../images/book-warehouse-2.png';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row mx-10 h-[50vh] justify-between items-center mb-40">
            <div className="md:w-[600px] ">
                <h1 className="text-4xl text-left font-bold my-4">International fulfilment solutions for you'r business needs.</h1>
                <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto labore accusantium corporis numquam unde voluptas aperiam eaque laborum, placeat temporibus ipsam esse sunt minus eius blanditiis vitae quis perferendis!</p>
            </div>
            <div className="">
                <img src={banner} width="500" alt="bannerVector" />
            </div>
        </div>
    );
};

export default Banner;