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
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Coat</th> 
                  <th>Actions</th>
                </tr> 
              </thead>
           <tbody>
            {this.state.data.map((dynasty, index) =><Dynasty info={dynasty} index={index}/>)}
           </tbody>
           </table>
           <Link to={'dynasties/newDynasty'}><button className="addButton">Add new Dynasty</button></Link>
      </div>
    );
  }
}

export default DynastiesList;