import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);
   

    useEffect(() => {
        fetch('https://pure-basin-35880.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setBooks(data))
           
    }, [])
    return [books, setBooks];
}
export default useBooks;