import React, { useState, useEffect} from 'react';
import './CountriesList.css';
import '../country/Country'
import Country from '../country/Country';
import {Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function CountriesList(){

  const [data, setData] = useState([])
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://countries-and-rulers-app.herokuapp.com/countries', {mode: "cors"})
    .then(response => response.json())
    .then(content => {
      setData(content);
    });
  });

  const moveToAddNewCountry = e =>{
    e.preventDefault();
    navigate("/countries/newCountry")
  }



    return (
      <div className="countriesList">
            <table className='countriesTable'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Flag</th>
                  <th>Actions</th>
                </tr> 
              </thead>
           <tbody>
             {data.map((country, index) =><Country info={country} index={index}/>)}
           </tbody>
           </table>
           <button className="addButton" onClick={moveToAddNewCountry}>Add new Country</button>
      </div>
    );
}

export default CountriesList;