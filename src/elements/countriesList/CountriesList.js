import React, {Component} from 'react';
import './CountriesList.css';
import '../country/Country'
import Country from '../country/Country';

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
              </tr> 
           {this.state.data.map((country, index) =><Country info={country} index={index}/>)}
           </table>
      </div>
    );
  }
}

export default CountriesList;