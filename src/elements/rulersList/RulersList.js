import React, { useState, useEffect} from 'react';
import './RulersList.css';
import Ruler from '../ruler/Ruler';
import {Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function RulersList(props){
  const [data, setData] = useState([])
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://countries-and-rulers-app.herokuapp.com/rulers', {mode: "cors"})
    .then(response => response.json())
    .then(content => {
      setData(content);
    });
  });



    return (
      <div class="rulerList">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Dynasty name</th>
                  <th>Actions</th>
                </tr> 
              </thead>
           <tbody>
            {data.map((ruler, index) =><Ruler info={ruler} index={index}/>)}
           </tbody>
           </table>
           <Link to={'rulers/newRuler'}><button class="addButton">Add new Ruler</button></Link>
      </div>
    );
  }

export default RulersList;