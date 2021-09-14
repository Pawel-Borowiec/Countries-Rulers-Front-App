import React, {Component} from 'react';

class Country extends Component {




  render() {
    return (
      <tr>
          <td>{this.props.index+1}</td>
          <td>{this.props.info.name}</td>
          <td><img src={this.props.info.coat}></img></td>
          <td>
          <button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
          </td>
      </tr>
    );
  }
}

export default Country;