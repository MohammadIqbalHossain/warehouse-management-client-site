import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdDelete } from 'react-icons/md';
import Spinner from '../Spinner/Spinner'
import auth from '../../firebase.init';

const MyInventories = () => {
    const [myBooks, setMyBooks] = useState([]);
    console.log(myBooks);
    const [user] = useAuthState(auth);
    const email = user?.email;


    console.log(user);
    const url = `https://warehouse-management-server-site-production-5e2c.up.railway.app/books?email=${email}`;
    // const url = `https://warehouse-management-server-site-production-5e2c.up.railway.app/books?email=${email}`
    console.log(url);

    useEffect(() => {
        fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyBooks(data)
            })

    }, [user])

    if (!myBooks.length < 0) {
        return <Spinner />
    }


    const handleDeleteItem = id => {
        const confirmation = window.confirm("Are you sure?");
        if (confirmation) {
            const url = `https://warehouse-management-server-site-production-5e2c.up.railway.app/book/${id}`
            console.log(url)
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const rest = myBooks.filter(book => book._id !== id);
                        setMyBooks(rest);
                    }
                })
        }
    }


    return (
        <div>
            {
                myBooks.map(book => <div className="md:w-[700px] md:mx-auto mx-10" key={book._id}>
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