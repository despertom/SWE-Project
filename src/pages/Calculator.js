import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { promptReact } from '../components/Prompt'

function Calculator() {
    // Options can be added to the dropdown. 
    const [optionItems, setOptionItems] = useState([]);
    // User defined items, Selected items change whenever button pressed.
    const [userDefinedItems, setUserDefinedItems] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);
    // Selected item changes when dropdown changed.
    const [selectedItem, setSelectedItem] = useState("");
    const [selectedCount, setSelectedCount] = useState(1);
    // Get the username from local storage
    const username = localStorage.getItem('username');

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('http://localhost:5000/getoptions');
                const data = await res.json();
                console.log('Fetched data:', data);
                setOptionItems([
                    ...optionItems,
                    ...data.options
                ]);
            } catch (err) {
                console.error('Fetch error:', err);
            }
        })();
    }, []);

    const addItemToTable = async () => {
        if (selectedItem == "new") {
            // Prompts are all temporary. This will be replaced with its own input fields.
            const name = await promptReact("Enter the name of the new item:");
            if (name == null) {
                return;
            }
            //const name = prompt("Name of added item:");
            const num = await promptReact("Enter the carbon production (CO2/year) of the new item:", "number");
            if ((num == null || num == "") || parseInt(num) == NaN) {
                return;
            }
            setUserDefinedItems([...userDefinedItems, {id: name, value: num}])
            setOptionItems([
                ...optionItems,
                name
            ]);
            setSelectedItem(name);
        } else if (selectedItem) {
            setSelectedItems([...selectedItems, {id: selectedItem, count: selectedCount}]);
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
            {/* Display username */}
            {username && <h2>Hello {username}</h2>}
            <div class="field">
                <select 
                    key="items"
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                >
                    <option value=""></option>
                    {optionItems.map((item) => (
                        <option value={item}>{item}</option>
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
                            <td>{item.id}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={calculate}>Calculate!</button>
        </div>
    );
}

export default Calculator;
