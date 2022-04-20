import React, {Component} from 'react';
import Navigation from '../navigation/Navigation';


class Header extends Component {




  render() {
    return (
<<<<<<< HEAD
      <div class="bg-blue-300 rounded m-10 text-center text-4xl p-4">
          <div class="bg-gray-100 w-auto rounded p-2  ">
            <div class="text-7xl">Countries & Rulers App</div>
            <div class="text-5xl" >Application which shows rulers, countries, reigns and dynasties of miedieval europe</div>
          </div>
=======
      <div class="header">
          <div class="title">Countries & Rulers App</div>
          <div class="subtitle" >Application which shows rulers, countries, reigns and dynasties of miedieval europe</div>
>>>>>>> non-tailwind
          <Navigation />
      </div>
    );
  }
}

export default Header;