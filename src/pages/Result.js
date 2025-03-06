import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Result() {
    const { state } = useLocation();
    return (
        <div className="result">
            <header className="result-header">Result: {state.net_yearly || "N/A"} CO2/year</header>
        </div>
    );
}

export default Result;