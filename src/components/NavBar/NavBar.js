import React from "react";

const links = ['Home', 'About', 'Portfolio', 'Rates', 'Contact'];

class NavBar extends React.Component{
    render(){
        return (
            <div className="Header-nav">

                    <ul className="nav navbar-nav">
                    
                        <li className="nav-item"><a className="Header-nav-item" href="./rates/rates.html">Rates</a></li>
                        <li className="nav-item"><a className="Header-nav-item" href="./portfolio/portfolio.html">Portfolio</a></li>
                        <li className="nav-item"><a className="Header-nav-item" href="./contact/contact.html">Contact</a></li>
                        <li className="nav-item"><a className="Header-nav-item" href="./about/about.html">About</a></li>
                        <li className="nav-item"><a className="Header-nav-item active" href="/">Home</a></li>
                    </ul>

            </div>
       );
    }   
}
export default NavBar;