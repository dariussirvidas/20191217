import React, { Component } from "react";
//import styles from "./app.scss";
import Header from "../header/Header";
import Main from "../main/Main";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Nav/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
