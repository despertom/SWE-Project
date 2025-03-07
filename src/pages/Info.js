import React, { useState, useEffect } from 'react';
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
    <div class="information">
      <h1 style={myStyle}>Information Page</h1>
      <p style={{textAlign:'center'}}>GreenGauge is a carbon footprint calculator designed to calculate how much carbon your lifestyle produces in a year and allow you to compare your results with others.</p>
    </div>
  );
}

export default Info;