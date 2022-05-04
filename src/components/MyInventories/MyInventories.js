import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useBooks from '../Hooks/UseBooks';

const MyInventories = () => {
    const [book, setBook] = useState([]);
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

    return (
        <div>
            <h2>My Inventories: {book.length}</h2>
        </div>
    );
};

export default MyInventories;