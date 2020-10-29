import React, {Component} from 'react';
import './index.css';
import logo from "assets/signe-jul.png";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/about">Characters</Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;