import React, { Component } from "react";
import styles from "./nav.scss";

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href={"#"}>Main</a></li>
                    <li><a href={"#"}>Products</a></li>
                    <li><a href={"#"}>Careers</a></li>
                    <li><a href={"#"}>About us</a></li>
                    <li><a href={"#"}>Links</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;