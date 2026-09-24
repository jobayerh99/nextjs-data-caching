import React from 'react';


export const generateStaticParams = async() =>{
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();

    return books.slice(1,3).map(book => ({bookId: book.id}));
}


const BookDetailPage = async({ params }) => {

    const {bookId} = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`)

    const book = await res.json();

    return (
        <div>
            <h2>Book Details</h2>
            <h3>Title: {book.title}</h3>
            <p>Description: {book.description}</p>
            <p>Description: {book.author}</p>
            <p>Description: ${book.price}</p>
        </div>
    );
};

export default BookDetailPage;