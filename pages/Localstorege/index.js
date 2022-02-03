import React, { useState, useEffect } from 'react';
import Tableview from '../Tableview';
import { FaRegTrashAlt } from "react-icons/fa";
// import { BiEdit } from "react-icons/fa";


// const getDataformls = () => {
//     // const data = localStorage.getItem('books');
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         return []
//     }
// }

export default function Localstorege() {

    const [books, setBooks] = useState([]);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

    const [update, setUpdate] = useState(false);

    const [index, setIndex] = useState("");

    const handleAddBookSubmit = () => {
        // e.preventDefault();
        let book = {
            title: title,
            author: author,
            isbn: isbn
        }
        setBooks([...books, book]);
        setTitle('');
        setAuthor('');
        setIsbn('');
    }
    console.log(books);

    const deletbook = (value) => {
        const Arr = books.filter((item, index) => index != value)
        setBooks(Arr);
    }

    const onUpdate = (item, index) => {
        console.log("ass::::::", item);
        setTitle(item.title);
        setAuthor(item.author);
        setIsbn(item.isbn);
        setUpdate(true);
        setIndex(item.title);
    }

    const onUpdateSubmit = () =>{
        console.log("affss::::::");
        const newArray ={}
        let book = {
            title: title,
            author: author,
            isbn: isbn
        }
        const filterData = books.map((item) => {
            if (item.title == book.title) {
              item = book;
            }
            return item;
          });
        // newArray[index] = book
        setBooks(filterData);
    }

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (

        <>
            <div className="container text-center mt-5">
                <h1 className="mt-5">Booklist</h1>
                <p>add and view localstorege</p>
                <div className="row">
                    <div className="col-10 col-md-6 mt-5">
                        <div className="form-container">

                            <form className="form-group" >

                                <label>Title</label>
                                <input type="text" className="form-control" required
                                    onChange={(e) => setTitle(e.target.value)} value={title}></input>
                                <br />
                                <br />

                                <label>Author</label>
                                <input type="text" className="form-control" required
                                    onChange={(e) => setAuthor(e.target.value)} value={author}></input>
                                <br />
                                <br />

                                <label>Isbn#</label>
                                <input type="text" className="form-control" required
                                    onChange={(e) => setIsbn(e.target.value)} value={isbn}></input>
                                <br />
                                <br />
                                {update == true ? <button type="button" className="btn btn-success btn-md" onClick={() => onUpdateSubmit()}>Update</button> : <button type="button" className="btn btn-success btn-md" onClick={() => handleAddBookSubmit()}>Submit</button>}

                            </form>
                        </div>
                    </div>

                    <div className="col-10 col-md-6 mt-5">
                        {books.length ? <div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <th>#Isbn</th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Delete</th>
                                        <th>update</th>
                                    </thead>
                                    <tbody>
                                        {books.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.isbn}</td>
                                                <td>{item.title}</td>
                                                <td>{item.author}</td>
                                                <td className="delete-btn" >
                                                    <button type="button" className="btn btn-primary" onClick={() => deletbook(index)}><FaRegTrashAlt className="icon" /></button></td>
                                                <td className="delete-btn" >
                                                    <button type="button" className="btn btn-success" onClick={() => onUpdate(item, index)}>edit</button></td>
                                            </tr>
                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div> : <div>data not found</div>}

                    </div>

                </div>
            </div>

        </>
    )
}