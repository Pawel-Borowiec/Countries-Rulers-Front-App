import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './elements/header/Header';
import Footer from './elements/footer/Footer';
import CountriesList from './elements/countriesList/CountriesList';
import Home from './elements/home/Home';
import CountryForm from './elements/countryForm/CountryForm';
import DynastiesList from './elements/dynastiesList/DynastiesList';
import './styles.css';
import RulersList from './elements/rulersList/RulersList';
import CountryDetails from './elements/countryDetails/CountryDetails';


class App extends Component {
  

  render() {
    return (
      <div >
        <Router>
          <Header />
            <div class="container">
            <Route exact path="/"><Home /></Route>

            <Route exact path="/countries"><CountriesList/></Route>
            <Route exact path="/countries/newCountry"><CountryForm/></Route>
            <Route path="/countries/:id/details"><CountryDetails/></Route>

            <Route exact path="/dynasties"><DynastiesList/></Route>

            <Route path="/rulers"><RulersList/></Route>
            </div>
          <Footer />
        </Router>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click</button>
      </div>
    );
  }
}

export default App;