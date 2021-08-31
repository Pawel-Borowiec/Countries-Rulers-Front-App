import React, {Component} from 'react';
import Navigation from '../navigation/Navigation';

class Header extends Component {




  render() {
    return (
      <div class="header">
          <div>Countries & Rulers App</div>
          <div>Application which shows rulers, countries, reigns and dynasties of miedieval europe</div>
          <Navigation />
      </div>
    );
  }
}

export default Header;