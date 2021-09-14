import React, {Component} from 'react';
import './DynastiesList.css';
import Dynasty from '../dynasty/Dynasty';
import {Link } from 'react-router-dom'

class DynastiesList extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://countries-and-rulers-app.herokuapp.com/dynasties', {mode: "cors"})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState( {data})
      });
  }



  render() {
    return (
      <div class="dynastiesList">
            <table>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Coat</th>
                <th>Country of origin</th>
                <th>Actions</th>
              </tr> 
           {this.state.data.map((dynasty, index) =><Dynasty info={dynasty} index={index}/>)}
           </table>
           <Link to={'dynasties/newDynasty'}><button class="addButton">Add new Dynasty</button></Link>
      </div>
    );
  }
}

export default DynastiesList;