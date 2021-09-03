import React, {Component} from 'react';
import {Link } from 'react-router-dom'
import './Navigation.css';

class Navigation extends Component {




  render() {
    return (
      <nav class="navigation">
        <div class="navigationItem"><Link to={'/'}>Home</Link></div>
        <div class="navigationItem"><Link to={'/rulers'}>Rulers</Link></div>
        <div class="navigationItem"><Link to={'/countries'}>Countries</Link></div>
        <div class="navigationItem"><Link to={'/dynasties'}>Dynasties</Link></div>
        <div class="navigationItem"><Link to={'/model'}>Data model</Link></div>
        <div class="navigationItem"><a href="https://github.com/Pawel-Borowiec/Countries-Rulers-Front-App">Github</a></div>
      </nav>
    );
  }
}

export default Navigation;