import React, {Component} from 'react';
import Navigation from '../navigation/Navigation';
import './Header.css';


class Header extends Component {




  render() {
    return (
      <div class="header">
          <div class="title">Countries & Rulers App</div>
          <div class="subtitle" >Application which shows rulers, countries, reigns and dynasties of miedieval europe</div>
          <center><p >Application is still unfinished.</p></center>
          <Navigation />
      </div>
    );
  }
}

export default Header;