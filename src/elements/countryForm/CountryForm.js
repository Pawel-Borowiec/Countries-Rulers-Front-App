import React, {Component} from 'react';
import Country from '../country/Country';
import './countryForm.css';

class CountryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', flag: '',};

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(event) {
    event.preventDefault();

    const country = {name : this.state.name, url : this.state.flag}

    console.log(JSON.stringify(country));

    fetch('https://countries-and-rulers-app.herokuapp.com/countries',{
    method : 'POST',
    headers : { "Content-Type" : "application/json"},
    body :  JSON.stringify(country)
    })
  }

  

  render() {
    return (
      <div className='dynastiesForm'>
          <form onSubmit={this.handleSubmit}>
          <div class="element">Enter new Country Data</div>
          <div>
            <div class="element">Name:</div>
            <input name='name' type="text" placeholder={'Poland'} onChange={this.myChangeHandler} />
          </div>
          <div>
            <div class="element">Flag(put here url link to flag):</div>
            <input name='flag' type="text" placeholder={'Flags\'s URL'} onChange={this.myChangeHandler} />
          </div>
          <input class="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CountryForm;