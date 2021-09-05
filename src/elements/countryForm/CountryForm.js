import React, {Component} from 'react';
import Country from '../country/Country';
import './countryForm.css';

class CountryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', link: ''};

    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCountry(event) {
    this.setState({name: event.target.name});
  }

  handleChangeUrl(event) {
    this.setState({link: event.target.link});
  }

  handleSubmit(event) {
    alert('You added country with a name : ' + this.state.name + ' and flag from ulr : '+this.state.link);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Wprowadz dane nowego kraju</p>
        <label>
          Name:
          <input type="text" placeholder={'Poland'} onChange={this.handleChangeCountry} />
        </label>
        <label>
          Flag(put here url link to flag):
          <input type="text" placeholder={'Your url'} onChange={this.handleChangeUrl} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CountryForm;