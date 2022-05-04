import React from 'react';
import useBooks from '../Hooks/UseBooks';
import { MdDelete } from 'react-icons/md';

const ManageInventories = () => {
    const [books, setBooks] = useBooks()
    console.log(books);
    const handleDeleteItem = id => {
        const confirmation = window.confirm("Are you sure?");
        if (confirmation) {
            const url = `http://localhost:5000/book/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const rest = books.filter(book => book._id !== id);
                        setBooks(rest);
                    }
                })
        }
    }
    return (
        <div>
           {
               books.map(book => <div>
                   <div className="flex justify-around items-center my-10 bg-gray-900 text-white  rounded-xl hover:bg-gray-700">
                        <div>
                            <img src={book.picture} width="50" alt="" />
                        </div>
                        <div>
                            <h3>{book.book.slice(0, 30)}</h3>
                        </div>
                        <div className="text-2xl">
                            <button onClick={() => handleDeleteItem(book._id)}><MdDelete color='red' /></button>
                        </div>
                    </div>
               </div>)
           }
        </div>
    );
};

export default ManageInventories;