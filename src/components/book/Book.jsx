import React, { Component } from "react";
import styles from "./book.scss";

function Book (props) {
    return (
        <div className="book">
            <h3>{props.title}</h3>
            <p>id: {props.id}</p>
            <p>{props.desc}</p>
            <p>kiekis: {props.stock}</p>
            <a href={props.link}>Plačiau...</a>
        </div>
    );
}

export default Book;