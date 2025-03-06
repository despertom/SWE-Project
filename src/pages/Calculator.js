import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';

function Home() {
    // First string is the ID (used on server), second is the display string. 
    const defaultItems = [
        ["car", "Sedan"],
        ["pickup", "Pickup truck"],
    ];
    // User defined items
    const [userDefinedItems, setUserDefinedItems] = useState([])
    // Options can be added to the dropdown. 
    const [optionItems, setOptionItems] = useState(defaultItems);
    // Selected items change whenever button pressed.
    const [selectedItems, setSelectedItems] = useState([]);
    // Selected item changes when dropdown changed.
    const [selectedItem, setSelectedItem] = useState("");

    const addItemToTable = () => {
        if (selectedItem == "new") {
            // Prompts are all temporary. This will be replaced with its own input fields.
            const name = prompt("Name of added item:");
            const id = name.replaceAll(/\s/g, "").toLowerCase(); // TODO may collide with other ids, maybe use uid
            const num = prompt("Net CO2 / year of item:");
            alert(name + "\n" + id + "\n" + num); 
            setUserDefinedItems([...userDefinedItems, {id: id, value: num}])
            setOptionItems([...optionItems, [id, name]]);
        } else if (selectedItem && !selectedItems.includes(selectedItem)) {
            setSelectedItems([...selectedItems, selectedItem]); // TODO use object/json here to handle counts.
            setSelectedItem(""); // Unselect it
        }
    };

    return (
        <div className="calculator">
            <header className="calculator-header">GreenGauge</header>
            <select 
                name="items"
                id="items"
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
            >
                <option value=""></option>
                {optionItems.map((item) => (
                    <option value={item[0]}>{item[1]}</option>
                ))}
                <option value="new">Something else...</option>
            </select>
            <button onClick={addItemToTable}>Add</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Selected</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map((item, index) => (
                        <tr key={index}>
                            {/* Assuming this can always find. Bad things will happen if it wont. */}
                            <td>{optionItems.find((value) => (
                                value[0] == item 
                            ))[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;