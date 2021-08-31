import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {




  render() {
    return (
      <nav class="navigation">
          <div class="navigationItem">Rulers</div>
          <div class="navigationItem">Countries</div>
          <div class="navigationItem">Dynasties</div>
      </nav>
    );
  }
}

export default Navigation;