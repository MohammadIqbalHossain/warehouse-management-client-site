import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const DisplayBooks = ({ books }) => {
    console.log(books);
    const navigate = useNavigate();

    const handleNavigate = (_id) => {
        navigate(`/details/${_id}`);
    }

    const { book, supplier, price, quantity, des, picture, _id } = books;
    console.log(book);

    return (
        <div className="mx-auto h-[600px]  p-5 border-2 border-gray-200 hover:shadow-xl relative">
            <img className="w-[200px] h-[300px] inline-block" src={picture} alt="" />
            <h4 className="text-left my-2">{book.slice(0, 30) + "..."}</h4>
            <p className="text-left my-2">descriptions: {des.slice(0, 70) + "..."}</p>
            <h4 className="text-left my-2">Quantity: {quantity}</h4>
            <h5 className="text-left my-2">Price for Each: {price}</h5>
            <h5 className="text-left my-2 text-green-300">Supplier: {supplier}</h5>

            <button
                onClick={() => handleNavigate(_id)}
                className="btn btn-outline btn-success absolute bottom-2  block mx-auto">
                Update
            </button>
        </div>
    );
};

export default DisplayBooks; 