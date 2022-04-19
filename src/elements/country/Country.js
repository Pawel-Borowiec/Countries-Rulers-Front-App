import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

class Country extends Component {




  render() {
    return (
      <tr key={this.props.index}>
          <td>{this.props.index+1}</td>
          <td>{this.props.info.name}</td>
          <td><img src={this.props.info.flag}></img></td>
          <td>
          <Link to={"countries/"+this.props.info.id+"/details"}><button class="detailsButton">Details</button></Link>
          <Link to={"countries/"+this.props.info.id+"/edit"}><button class="editButton">Edit</button></Link>
          <button className="deleteButton">Delete</button>
          </td>
      </tr>
    );
  }
}

export default Country;