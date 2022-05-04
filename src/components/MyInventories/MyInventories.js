import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdDelete } from 'react-icons/md';
import auth from '../../firebase.init';
import useBooks from '../Hooks/UseBooks';

const MyInventories = () => {
    const [book, setBook ] = useState([]);
    console.log(book);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:5000/books?email=${email}`;
    useEffect(() => {
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [user])


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
                        const rest = book.filter(book => book._id !== id);
                        setBook(rest);
                    }
                })
        }
    }

    return (
        <div>
              
            {
                book.map(book => <div className="w-[700px] mx-auto" key={book._id}>
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

export default MyInventories;