import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Result() {
    const { state } = useLocation();
    return (
        <div className="result">
            <h1 className="result-header">Result: {state.net_yearly || "N/A"} CO2/year</h1>
        </div>
    );
}

export default Result;