import React from 'react';


export const Tableview = (props) => {
    console.log(props,'abcd');
    return (
        <tr key={book.isbn}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td className="delete-btn" ></td>
    </tr>
    )

}