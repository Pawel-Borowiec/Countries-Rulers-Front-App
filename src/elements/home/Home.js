import React, {Component} from 'react';
import './Home.css';

class Home extends Component {




  render() {
    return (
      <div class="content-message">
          <h1>Welcome in my app. I am glad that someone visit here ;)</h1>
          <h3>Topic</h3>
          <p>This app is about making simple api with some data ( In that case about countries and their rulers) and reading it by react application. </p>
          <h3>Tech stack</h3>
          <p>Backend has been made by me in Spring Boot while Frontend in React.js</p>
         
      </div>
    );
  }
}

export default Home;