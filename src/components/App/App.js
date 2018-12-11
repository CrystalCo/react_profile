import React, { Component } from 'react';

import './App.css';

import Header from '../Header/Header';
import Post from '../Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div>
          <section className="App-main">
            <Post projectTitle="HiFi Fitness" caption="18x24 poster for the Bears Chicago gallery show" image={require('../Post/images/hifi_site.png')} />
            <Post projectTitle="Gunnar" caption="18x24 poster for the Blackhawks" image="https://cdn.shopify.com/s/files/1/1486/5206/products/jake.jpg?v=1544131507" />
            <Post projectTitle="Jake" caption="18x24 poster for the Bears Chicago gallery show" image="https://cdn.shopify.com/s/files/1/1486/5206/products/BEARS-PRINT-FINAL_2.jpg?v=1544391690" />
            <Post projectTitle="Gunnar" caption="18x24 poster for the Blackhawks" image="https://cdn.shopify.com/s/files/1/1486/5206/products/jake.jpg?v=1544131507" />
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
