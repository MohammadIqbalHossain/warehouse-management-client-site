import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/books/${bookId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBook(data))
    }, [])

    
    
    return (
        <div>
            <h1>Details: {book.book}</h1>
        </div>
    );
};

export default BookDetails;