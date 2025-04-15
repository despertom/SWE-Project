import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Prompt({ open, message, onClose, type = "text" }) {
    const [inputValue, setInputValue] = useState("");

    const handleOk = () => {
        onClose(inputValue);
    };

    const handleCancel = () => {
        onClose(null);
    };

    return (
        <Popup open={open} modal closeOnDocumentClick={false}>
        <div class="prompt">
            <div>
                <div class="field">
                    <label>{message}</label>
                    <input
                    class="inputbox"
                    type={type}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <br></br>
                <div class="buttons"> 
					<button onClick={handleCancel}>Cancel</button>
					<button onClick={handleOk}>OK</button>
				</div>
            </div>
        </div>
        </Popup>
    );
}

export function promptReact(message = "", inputType) {
    return new Promise((resolve) => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = ReactDOM.createRoot(container);

        const handleClose = (value) => {
        root.unmount();
        container.remove();
        resolve(value);
        };

        root.render(
            <Prompt open={true} message={message} onClose={handleClose} type={inputType} />
        );
    });
}

function Alert({ open, message, onClose }) {
    const [inputValue, setInputValue] = useState("");

    const handleOk = () => {
        onClose(inputValue);
    };

    return (
        <Popup open={open} modal closeOnDocumentClick={false}>
        <div class="prompt">
            <div>
                <div class="field">
                    <label>{message}</label>
                </div>
                <br></br>
                <div class="buttons"> 
					<button onClick={handleOk}>OK</button>
				</div>
            </div>
        </div>
        </Popup>
    );
}

export function alertReact(message = "") {
    return new Promise((resolve) => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const root = ReactDOM.createRoot(container);

        const handleClose = (value) => {
        root.unmount();
        container.remove();
        resolve(value);
        };

        root.render(
            <Alert open={true} message={message} onClose={handleClose} />
        );
    });
}
