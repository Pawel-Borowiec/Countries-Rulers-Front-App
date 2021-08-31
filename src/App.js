import React, {Component} from 'react';
import Country from './Country'

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
      <div>
        Hello {this.state.data.map(country =><Country info={country} />)}
      </div>
    );
  }
}

export default App;