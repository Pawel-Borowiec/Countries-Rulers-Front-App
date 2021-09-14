import React, {Component} from 'react';
import './CountryDetails.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function CountryDetails() {

      let { id } = useParams();

      return (
        <div>
          <h3>ID: {id}</h3>
          <Link to="/countries">Kliknij w tekst aby cofnac do listy krajow</Link>
        </div>
      );
}

export default CountryDetails;
