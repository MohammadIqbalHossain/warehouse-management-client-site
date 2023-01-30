import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('https://warehouse-management-server-site-production-5e2c.up.railway.app/book')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return [books, setBooks];
}
export default useBooks;