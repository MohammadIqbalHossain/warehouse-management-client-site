import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import useBooks from '../Hooks/UseBooks';

const Inventory = () => {
    const [books, setBooks] = useBooks([]);
    const slicedBooks = books.slice(0, 6);
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl my-5 ">Books Collections</h2>

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
                <button className="btn btn-outline btn-primary">Manage Inventories</button>
            </Link>

        </div>
    );
};

export default Inventory;