import React, {useState} from 'react';
import './App.css';

import {Counter} from "./Counter";
import {SettingsCounter} from "./SettingsCounter";

function App() {


    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    //Обработчики


    const incButtonHandler = () => {
        setMinValue(minValue + 1)
    }
    const resetButtonHandler = () => {
        setMinValue(0)
    }


    return (
        <div className="App">
            <Counter minValue={minValue} maxValue={maxValue} incButtonHandler={incButtonHandler}
                     resetButtonHandler={resetButtonHandler}/>
            <SettingsCounter getValueInputMin={setMinValue} getValueInputMax={setMaxValue}/>
        </div>
    );
}

export default App;
