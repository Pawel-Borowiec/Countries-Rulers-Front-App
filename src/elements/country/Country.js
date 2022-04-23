import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Country.css';
import { useNavigate } from "react-router-dom";

function Country(props) {
  const navigate = useNavigate(); 


  function moveToEdit(id){
    navigate(id+"/edit")
  }

   function deleteCountry(index) {
    fetch('https://countries-and-rulers-app.herokuapp.com/countries/'+index,{
    method : 'DELETE',
    headers : { "Content-Type" : "application/json"}
    })
    props.func(props.info.id)
  }


  return (
    <tr key={props.index}>
        <td>{props.index+1}</td>
        <td>{props.info.name}</td>
        <td><img src={props.info.flag}></img></td>
        <td>
        <button class="editButton" onClick={() => moveToEdit(props.info.id)}>Edit</button>
        <button className="deleteButton" onClick={() => deleteCountry(props.info.id)}>Delete</button>
        </td>
    </tr>
  );
}


export default Country;