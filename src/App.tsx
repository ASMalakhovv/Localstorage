import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalStorageHandler = () => {
        localStorage.setItem("save value", JSON.stringify(value))
    }

    const getFromLocalStorageHandler = () => {
       let valueAsString = localStorage.getItem("save value")
        if (valueAsString) {
            let getValue = JSON.parse(valueAsString)
            setValue(getValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>

        </div>
    );
}

export default App;
