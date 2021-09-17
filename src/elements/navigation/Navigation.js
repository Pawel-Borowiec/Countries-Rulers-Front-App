import React, {Component} from 'react';
import {Link } from 'react-router-dom'

class Navigation extends Component {




  render() {
    return (
      <nav class="bg-blue-800 w-auto rounded p-2 flex justify-center m-2 ">
        <div class="bg-gray-50 rounded w-20 m-3"><Link to={'/'}>Home</Link></div>
        <div class="bg-gray-50 rounded w-20 m-3"><Link to={'/rulers'}>Rulers</Link></div>
        <div class="bg-gray-50 rounded w-32 m-3"><Link to={'/countries'}>Countries</Link></div>
        <div class="bg-gray-50 rounded w-32 m-3"><Link to={'/dynasties'}>Dynasties</Link></div>
        <div class="bg-gray-50 rounded w-40 m-3"><Link to={'/model'}>Data model</Link></div>
        <div class="bg-gray-50 rounded w-20 m-3"><a href="https://github.com/Pawel-Borowiec/Countries-Rulers-Front-App">Github</a></div>
      </nav>
    );
  }
}

export default Navigation;