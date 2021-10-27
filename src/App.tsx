import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)
    const incHandler = () => {
        setValue(value + 1)
    }

    useEffect(()=> {
       let valueAsString = localStorage.getItem("save value")
       if(valueAsString){
           let valueAsNumber = JSON.parse(valueAsString)
           setValue(valueAsNumber)
       }
    },[])

    useEffect(() => {
        localStorage.setItem("save value", JSON.stringify(value))
    },[value])

    const setToLocalStorageHandler = () => {
        localStorage.setItem("save value", JSON.stringify(value))

    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>


        </div>
    );
}

export default App;
