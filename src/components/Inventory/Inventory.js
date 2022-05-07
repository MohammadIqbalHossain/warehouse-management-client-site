import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import useBooks from '../Hooks/UseBooks';
import Spinner from '../Spinner/Spinner';

const Inventory = () => {
    const [books, setBooks] = useBooks([]);
    const slicedBooks = books.slice(0, 6);
    
    
   
    if(!books.length > 0){
        return <Spinner />
    }
    
    return (
        <div className="mt-20">
            <div>
                <h2 className="text-center my-5 text-xl">Books Collections</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
                {
                    slicedBooks.map(book => <DisplayBooks
                        key={book._id}
                        books={book}
                    ></DisplayBooks>)
                }
            </div>
            <Link to='/manage-inventories'>
                <button className="btn btn-outline hover:btn-primary text-white my-4">Manage Inventories</button>
            </Link>

        </div>
    );
};

export default Inventory;