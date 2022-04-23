import React, {Component} from 'react';
import { useNavigate } from "react-router-dom";
function Country(props){
  const navigate = useNavigate(); 


  function moveToEdit(id){
    navigate(id+"/edit")
  }




  return (
    <tr>
        <td>{props.index+1}</td>
        <td>{props.info.name}</td>
        <td><img src={props.info.coat}></img></td>
        <td>
          <button class="editButton" onClick={() => moveToEdit(props.info.id)}>Edit</button>
          <button className="deleteButton">Delete</button>
        </td>
    </tr>
  );
}

export default Country;