import React, { useState, useEffect} from 'react';
import './CountryDetails.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CountryDetails() {

      let { id } = useParams();
      const [data, setData] = useState([])
      const navigate = useNavigate(); 

      const returnToList = e =>{
        e.preventDefault();
        navigate("/countries")
      }

      useEffect(() => {
        fetch('https://countries-and-rulers-app.herokuapp.com/countries/'+id, {mode: "cors"})
        .then(response => response.json())
        .then(content => {
          setData(content);
        });
      });

      
      return (
        <div>
          <h3>ID: {id}</h3>
          <h2>{data.name}</h2>
          <img src={data.flag}></img>
          <button className='returnButton' onClick={returnToList}>Return to list of countries</button>
        </div>
      );
}

export default CountryDetails;
