import React, {Component} from 'react';
import './CountriesList.css';
import '../country/Country'
import Country from '../country/Country';
import {Link } from 'react-router-dom'

class CountriesList extends Component {
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
      <div class="countriesList">
            <table>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Flag</th>
                <th>Actions</th>
              </tr> 
           {this.state.data.map((country, index) =><Country info={country} index={index}/>)}
           </table>
           <Link to={'countries/newCountry'}><button class="addButton">Add new Country</button></Link>
      </div>
    );
  }
}

export default CountriesList;