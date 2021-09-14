import React, {Component} from 'react';
import './RulersList.css';
import Ruler from '../ruler/Ruler';
import {Link } from 'react-router-dom'

class RulersList extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://countries-and-rulers-app.herokuapp.com/rulers', {mode: "cors"})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState( {data})
      });
  }



  render() {
    return (
      <div class="rulerList">
            <table>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Dynasty name</th>
                <th>Actions</th>
              </tr> 
           {this.state.data.map((ruler, index) =><Ruler info={ruler} index={index}/>)}
           </table>
           <Link to={'rulers/newRuler'}><button class="addButton">Add new Ruler</button></Link>
      </div>
    );
  }
}

export default RulersList;