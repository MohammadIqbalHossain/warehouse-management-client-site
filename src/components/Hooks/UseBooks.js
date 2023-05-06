// import { data } from "autoprefixer"; Never used value.
import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);
    console.log(books);

    useEffect(() => {
        fetch('https://warehouse-management-server-site-production.up.railway.app/book')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return [books, setBooks];
}


export default useBooks;