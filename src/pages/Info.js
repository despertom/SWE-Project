import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Info(){
    const myStyle = {
    color: "black",
    backgroundColor: "Green",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: 'center'
  };
  return (
    <div>
      <body>
      <h1 style={myStyle}>Information Page</h1>
      <p style={{textAlign:'center'}}>GreenGauge is a carbon footprint calculator designed to calculate how much carbon your lifestyle produces in a year and allow you to compare your results with others.</p>
      </body>
    </div>
  );
}

export default Info;