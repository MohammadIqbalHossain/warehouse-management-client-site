import React from 'react';
import banner from '../../images/book-warehouse-2.png';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row mx-10 h-[100vh] md:justify-between items-center ">
            <div className="md:w-[600px]">
                <h1 className="text-4xl text-left font-bold my-4">International fulfilment solutions for you'r business needs.</h1>
                <p className="text-left">
                    This is a website make organise selling the newest trending book in whole, We always want to provide enoght books to you, it's really important that your books store get full of books, so every one can get a copy, keep reading, book gives ultimate light. 
                </p>
            </div>
            <div className="">
                <img src={banner} width="600" alt="bannerVector" />
            </div>
        </div>
    );
};

export default Banner;