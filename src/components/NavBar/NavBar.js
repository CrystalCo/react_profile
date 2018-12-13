import React from "react";

const links = ['Home', 'About', 'Portfolio', 'Rates', 'Contact'];

class NavBar extends React.Component{
    constructor(props) {
        super(props);
      
        this.sortByOptions = ['Contact', 'Rates', 'Portfolio', 'About', 'Home'];
        this.listItems = this.listItems.bind(this);
    }

    listItems() {
        return this.sortByOptions.map(link => {
            let hrefLink = `./${link}/${link}.html`;
            return (<li className="nav-item">
                        <a className="Header-nav-item" href={hrefLink}>
                            {link}
                        </a>
                    </li>);     
        });
    }


    render() {
        return (
            <div>
                {this.listItems()}
            </div>
       );
    }   
}
export default NavBar;