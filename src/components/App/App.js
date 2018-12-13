import React, { Component } from 'react';

import './App.css';

import Header from '../Header/Header';
import Post from '../Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header Header Header--top">
          
          <nav className="navbar navbar-default">
            <div className="container-fluid">

              <ul className="nav navbar-nav">
                <li className="logo"><Header /></li>
                <li className="navbar-divisor"></li>
                <li className="nav-item"><a className="Header-nav-item active" href="/">Home</a></li>
                <li className="nav-item"><a className="Header-nav-item" href="./about/about.html">About</a></li>
                <li className="nav-item"><a className="Header-nav-item" href="./contact/contact.html">Contact</a></li>
                <li className="nav-item"><a className="Header-nav-item" href="./portfolio/portfolio.html">Portfolio</a></li>
                <li className="nav-item"><a className="Header-nav-item" href="./rates/rates.html">Rates</a></li>
              </ul>
           
            </div>
          </nav>
        </header>
        <div>
          <section className="App-main">
            <Post projectTitle="HiFi Fitness" caption="HTML, CSS, and WordPress" image={require('../Post/images/hifi_site.png')} />
            <Post projectTitle="C3 Fund" caption="CSS" image={require('../Post/images/c3_site.png')} />
            <Post projectTitle="HiFiFitness.com" caption="Customized site from beginning to end." image={require('../Post/images/hifi_site.png')} />
            <Post projectTitle="c3.fund" caption=" CSS" image={require('../Post/images/c3_site.png')} />
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
