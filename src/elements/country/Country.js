import React, {Component} from 'react';
import './Country.css';

class Country extends Component {




  render() {
    return (
      <tr>
          <td>{this.props.index+1}</td>
          <td>{this.props.info.name}</td>
          <td><img src={this.props.info.flag}></img></td>
      </tr>
    );
  }
}

export default Country;