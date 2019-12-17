import React, { Component } from "react";
import Book from "../book/Book"
import styles from "./main.scss";
import booksData from "../../data/books.jsx";

class Main extends Component {
    render() {
        console.log(booksData);
        const bookList = booksData.map(book =>
            <Book
                id = {book.id}
                title = {book.title}
                desc = {book.desc}
                link = {book.link}
                stock = {book.stock}
            />)
        return (
            <main>
                {bookList}
            </main>
        );
    }
}

export default Main;