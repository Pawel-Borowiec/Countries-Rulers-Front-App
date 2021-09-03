import React, {Component} from 'react';
import './Home.css';

class Home extends Component {




  render() {
    return (
      <div class="content-message">
          <h1>Welcome in my app. I am glad that someone visit here ;)</h1>
          <h3>Topic</h3>
          <p>This app is about european countries and their rulers. I made that app to fill my portfolio on gihub due to lack of well done projects in it. I count here every country separatly so Poland and Polish-Lithuanian Commonwealth are not single entity.</p>
          <h3>Tech stack</h3>
          <p>Backend has been made by me in Spring Boot while Frontend in React.js</p>
         
      </div>
    );
  }
}

export default Home;