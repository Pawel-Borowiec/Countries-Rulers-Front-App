import React, {Component} from 'react';
import { useNavigate } from "react-router-dom";
function Country(props) {
  const navigate = useNavigate(); 

  function moveToDetails(id){
    navigate(id+"/details")
  }

  function moveToEdit(id){
    navigate(id+"/edit")
  }


  return (
    <tr>
        <td>{props.index+1}</td>
        <td>{props.info.name}</td>
        <td>{props.info.dynastyName}</td>
        <td>
        <button class="editButton" onClick={() => moveToEdit(props.info.id)}>Edit</button>
        <button className="deleteButton">Delete</button>
        </td>
    </tr>
  );
}

export default Country;