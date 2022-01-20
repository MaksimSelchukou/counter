import React, {ChangeEvent, useState} from 'react';
import './SettingsCounter.css'

export const SettingsCounter = () => {


    const [value, setValue] = useState('')


    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className="mainS">
            <h1>Settings Counter</h1>
            <div className="divInput">
                <h2>min Value</h2>
                <input type="text" onChange={inputChangeHandler}/>
                <h2>max Value</h2>
                <input/>
            </div>
        </div>
    );
};

