import React from "react";
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <div className="Nav-brand-logo">
                <a className="navbar-brand Header-nav-item" href="/">
                CrystalCoding
                </a>
            </div>
       );
    }   
}
export default Header;