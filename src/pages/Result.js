import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Result() {
    const { state } = useLocation();
    return (
        <div className="result">
            <h1 className="result-header">Result: {state.net_yearly || "N/A"} CO2/year</h1>
            <h1 className="result-prompt">Your carbon footprint is {resultOutcome(20)}</h1>
        </div>
    );
}

function resultOutcome(carbonFootprint) {
    if (carbonFootprint < 16) {
        return "good";
    }
    return "bad";
}

export default Result;