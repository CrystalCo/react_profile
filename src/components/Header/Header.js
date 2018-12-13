import React from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

class Header extends React.Component{
    render(){
        return (
            <div className="Header-nav">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">

                    <ul className="nav navbar-nav">
                        <li className="logo"><Logo /></li>
                    
                        <li className="nav-item"><a className="Header-nav-item" href="./rates/rates.html">Rates</a></li>
                        <li className="nav-item"><a className="Header-nav-item" href="./portfolio/portfolio.html">Portfolio</a></li>
                        <li className="nav-item"><a className="Header-nav-item" href="./contact/contact.html">Contact</a></li>
                        <li className="nav-item"><a className="Header-nav-item" href="./about/about.html">About</a></li>
                        <li className="nav-item"><a className="Header-nav-item active" href="/">Home</a></li>
                    </ul>

                    </div>
                </nav>
            </div>
       );
    }   
}
export default Header;



