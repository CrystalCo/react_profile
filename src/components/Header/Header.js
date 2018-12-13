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
                        <NavBar />
                    </ul>

                    </div>
                </nav>
            </div>
       );
    }   
}
export default Header;



