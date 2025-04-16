import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css';

function Result() {
    const { state } = useLocation();
    return (
        <div className="result">
            <h1 className="result-header">Result: {state.net_yearly || "N/A"} kgCO2/year</h1>
            <h1 className="result-prompt">Your carbon footprint is {resultOutcome(state.net_yearly)}</h1>
            <h1 className="result-prompt">Read more <Link to="/info">here.</Link></h1>
        </div>
    );
}

function resultOutcome(carbonFootprint) {
    if (carbonFootprint > 14000 && carbonFootprint < 18000) {
        return "about average.";
    } else if (carbonFootprint <= 14000) {
        return "below average. That is great!";
    } else {
        return "above average. Needs improvement.";
    }
}

export default Result;