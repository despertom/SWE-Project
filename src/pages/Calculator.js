import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    // Options can be added to the dropdown. 
    const [optionItems, setOptionItems] = useState({
        car: "Sedan",
        pickup: "Pickup truck",
        tree: "Tree",
    });
    // User defined items, Selected items change whenever button pressed.
    const [userDefinedItems, setUserDefinedItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);
    // Selected item changes when dropdown changed.
    const [selectedItem, setSelectedItem] = useState("");
    const [selectedCount, setSelectedCount] = useState(1);

    const navigate = useNavigate();

    const addItemToTable = () => {
        if (selectedItem == "new") {
            // Prompts are all temporary. This will be replaced with its own input fields.
            const name = prompt("Name of added item:");
            const id = name.replaceAll(/\s/g, "").toLowerCase(); // TODO may collide with other ids, maybe use uid
            const num = prompt("Net CO2 / year of item:");
            alert(name + "\n" + id + "\n" + num); 
            setUserDefinedItems([...userDefinedItems, {id: id, value: num}])
            setOptionItems({
                ...optionItems,
                [id]: name
            });
            setSelectedItem(id);
        } else if (selectedItem) {
            setSelectedItems([...selectedItems, {id: selectedItem, count: selectedCount}]); // TODO use object/json here to handle counts.
            setSelectedItem(""); // Unselect it
            setSelectedCount(1);
        }
    };

    const calculate = async () => {
        try {
            const res = await fetch("http://localhost:5000/calculate", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({
                    userDefined: userDefinedItems,
                    selected: selectedItems,
                }),
            });
    
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
    
            const data = await res.json();
            navigate("/result", {
                state: data,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            // Optionally handle the error, like showing an error message to the user
        }
    };

    return (
        <div className="calculator">
            <h1 className="calculator-header">GreenGauge</h1>
            <div class="field">
                <select 
                    key="items"
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                >
                    <option value=""></option>
                    {Object.keys(optionItems).map((item) => (
                        <option value={item}>{optionItems[item]}</option>
                    ))}
                    <option value="new">Something else...</option>
                </select>
                <input type="number" value={selectedCount} onChange={(e) => setSelectedCount(e.target.value)} />
                <button onClick={addItemToTable}>Add</button>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Selected</th><th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map((item, index) => (
                        <tr key={index}>
                            {/* Assuming this can always find. Bad things will happen if it wont. */}
                            <td>{optionItems[item.id]}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={calculate}>Calculate!</button>
        </div>
    );
}

export default Home;