import React, {Component} from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import './Country.css';
import { useNavigate } from "react-router-dom";
>>>>>>> non-tailwind

function Country(props) {
  const navigate = useNavigate(); 

  function moveToDetails(id){
    navigate(id+"/details")
  }

  function moveToEdit(id){
    navigate(id+"/edit")
  }


  return (
    <tr key={props.index}>
        <td>{props.index+1}</td>
        <td>{props.info.name}</td>
        <td><img src={props.info.flag}></img></td>
        <td>
        <button class="detailsButton" onClick={() => moveToDetails(props.info.id)}>Details</button>
        <button class="editButton" onClick={() => moveToEdit(props.info.id)}>Edit</button>
        <button className="deleteButton">Delete</button>
        </td>
    </tr>
  );
}


export default Country;