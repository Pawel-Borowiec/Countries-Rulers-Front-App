import React, { useState} from 'react';
import {Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import './Navigation.css';
import { useNavigate } from "react-router-dom";
>>>>>>> non-tailwind

function Navigation(){


  const endpoints = ['/','/rulers','/countries','/dynasties','/model','https://github.com/Pawel-Borowiec/Countries-Rulers-Front-App']
  const navigate = useNavigate(); 

  function navigateToEndpoint(index){
    navigate(endpoints[index])
  }

    return (
<<<<<<< HEAD
      <nav class="bg-blue-800 w-auto rounded p-2 flex justify-center m-2 ">
        <div class="bg-gray-50 rounded w-20 m-3"><Link to={'/'}>Home</Link></div>
        <div class="bg-gray-50 rounded w-20 m-3"><Link to={'/rulers'}>Rulers</Link></div>
        <div class="bg-gray-50 rounded w-32 m-3"><Link to={'/countries'}>Countries</Link></div>
        <div class="bg-gray-50 rounded w-32 m-3"><Link to={'/dynasties'}>Dynasties</Link></div>
        <div class="bg-gray-50 rounded w-40 m-3"><Link to={'/model'}>Data model</Link></div>
        <div class="bg-gray-50 rounded w-20 m-3"><a href="https://github.com/Pawel-Borowiec/Countries-Rulers-Front-App">Github</a></div>
=======
      <nav class="navigation">
        <div class="navigationItem" onClick={() => navigateToEndpoint(0)}>Home</div>
        <div class="navigationItem" onClick={() => navigateToEndpoint(1)}>Rulers</div>
        <div class="navigationItem" onClick={() => navigateToEndpoint(2)}>Countries</div>
        <div class="navigationItem" onClick={() => navigateToEndpoint(3)}>Dynasties</div>
        <div class="navigationItem" onClick={() => navigateToEndpoint(4)}>Data model</div>
        <div class="navigationItem"><a href={endpoints[5]}>Github</a></div>
>>>>>>> non-tailwind
      </nav>
    );
  }


export default Navigation;