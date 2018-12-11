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
            <Post projectTitle="Jake" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://cdn.shopify.com/s/files/1/1486/5206/products/31936576_10214677989917098_8725086252048580608_n_5fd9e59f-ec17-4a70-bdb0-f839025b2acb.jpg?v=1544231337" />
            <Post projectTitle="Gunnar" avatar={require('../Post/gunnar.jpg')} caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
