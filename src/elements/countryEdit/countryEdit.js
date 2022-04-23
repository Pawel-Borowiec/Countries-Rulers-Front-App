import React, { useState, useEffect} from 'react';
import './countryEdit.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CountryEdit() {

      let { id } = useParams();
      const [data, setData] = useState([])
      const navigate = useNavigate(); 

      const myChangeHandler = (event) => {
        
        var temp = data
        console.log(temp)
        let nam = event.target.name;
        let val = event.target.value;
        temp[nam] = val;
        setData(temp)
      }

      const returnToList = e =>{
        e.preventDefault();
        navigate("/countries")
      }

      function handleSubmit() {
        const country = {name : data.name, url : data.flag, id : data.id}
        console.log(country)
      fetch('https://countries-and-rulers-app.herokuapp.com/countries/'+id,{
      method : 'PUT',
      headers : { "Content-Type" : "application/json"},
      body :  country
      })
    }

      useEffect(() => {
        fetch('https://countries-and-rulers-app.herokuapp.com/countries/'+id, {mode: "cors"})
        .then(response => response.json())
        .then(content => {
          setData(content);
        });
      }, [data]);

      
      return (
        <div className='dynastiesForm'>
          <div className='editForm'>
            <div className="element">Edit form</div>
            <div>
              <div className="element">Name:</div>
              <input name='name' type="text" placeholder={data.name} onChange={myChangeHandler} />
            </div>
            <div>
              <div className="element">Flag(put here url link to flag):</div>
              <input name='flag' type="text" placeholder={data.flag}  onChange={myChangeHandler}/>
            </div>
            <button className="submitButton"  onClick={handleSubmit}>Submit</button>
          </div>
          <button className='returnButton' onClick={returnToList}>Return to list of countries</button>
          
          
        </div>
      );
}

export default CountryEdit;
