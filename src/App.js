import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Country from './elements/country/Country'
import Header from './elements/header/Header';
import Footer from './elements/footer/Footer';
import CountriesList from './elements/countriesList/CountriesList';
import Home from './elements/home/Home';
import CountryForm from './elements/countryForm/CountryForm';
import './styles.css';


class App extends Component {
  

  render() {
    return (
      <div >
        <Router>
          <Header />
            <div class="container">
            <Route exact path="/"><Home /></Route>
            <Route path="/countries"><CountriesList/></Route>
            <Route path="/rulers"><CountryForm/></Route>
            </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;