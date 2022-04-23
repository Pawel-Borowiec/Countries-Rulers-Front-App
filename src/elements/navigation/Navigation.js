import React, { useState} from 'react';
import {Link } from 'react-router-dom'
import './Navigation.css';
import { useNavigate } from "react-router-dom";

function Navigation(){


  const endpoints = ['/','/rulers','/countries','/dynasties','/model','https://github.com/Pawel-Borowiec/Countries-Rulers-Front-App']
  const navigate = useNavigate(); 

  function navigateToEndpoint(index){
    navigate(endpoints[index])
  }

    return (
      <nav class="navigation">
        <div class="navigationItem" onClick={() => navigateToEndpoint(0)}>Home</div>
        <div class="navigationItem" onClick={() => navigateToEndpoint(1)}>Rulers</div>
        <div class="navigationItem" onClick={() => navigateToEndpoint(2)}>Countries</div>
        <div class="navigationItem" onClick={() => navigateToEndpoint(3)}>Dynasties</div>
        <div class="navigationItem"><a href={endpoints[5]}>Github</a></div>
      </nav>
    );
  }


export default Navigation;