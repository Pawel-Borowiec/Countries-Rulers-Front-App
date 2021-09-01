import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Country from './Country'
import Header from './elements/header/Header';
import Footer from './elements/footer/Footer';
import './styles.css';



class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://countries-and-rulers-app.herokuapp.com/countries', {mode: "cors"})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState( {data})
      });
  }

  render() {
    return (
      <div >
        <Router>
          <Header />
            <div class="container">
            <Route exact path="/">Hello on main page of the app </Route>
            <Route path="/countries"> {this.state.data.map(country =><Country info={country} />)}</Route>

            </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;