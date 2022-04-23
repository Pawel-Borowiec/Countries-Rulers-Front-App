import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './elements/header/Header';
import Footer from './elements/footer/Footer';
import CountriesList from './elements/countriesList/CountriesList';
import Home from './elements/home/Home';
import CountryForm from './elements/countryForm/CountryForm';
import DynastiesList from './elements/dynastiesList/DynastiesList';
import './styles.css';
import RulersList from './elements/rulersList/RulersList';
import CountryEdit from './elements/countryEdit/countryEdit';


class App extends Component {
  

  render() {
    return (
      <div className='container'>
        <Router>
          <Header />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/countries" element={<CountriesList />}></Route>
              <Route exact path="/countries/newCountry" element={<CountryForm />}></Route>
              <Route path="/countries/:id/edit" element={<CountryEdit />}></Route>
              <Route exact path="/dynasties" element={<DynastiesList />}></Route>
              <Route path="/rulers" element={<RulersList />}></Route>
            </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;