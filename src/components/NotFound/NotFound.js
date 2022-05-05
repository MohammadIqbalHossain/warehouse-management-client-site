import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound-container md:text-[300px] text-[100px] px-10">
            <h1 className="fancy-oops mt-10">Oops!</h1>
            <h1 className="text-bold text-3xl font-semibold mt-1 text-green-900">404-PAGE NOT FOUND</h1>
            <p className="text-xl font-serif  md:w-[600px]">The page you're looking for might have been removed had it's name changed or it't temporary unavilable.</p>
            <button className="p-3 px-6 bg-blue-600 rounded-full text-lg font-bold text-white font-mono my-8">
                <Link to="/">GO TO HOME PAGE</Link>
            </button>
        </div>
    );
};

export default NotFound;