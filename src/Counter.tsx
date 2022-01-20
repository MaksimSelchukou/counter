import React, {useState} from 'react';
import {Button} from "./components/button/Button";
import './Counter.css'


export const Counter = () => {
    const [value, setValue] = useState(2)

    const incButtonHandler = () => {
         setValue(value + 1)
        // setValue(Math.pow(value, 2))
    }

    const resetButtonHandler = () => {
        setValue(0)
    }

    let maxValue = 5;

    const [state, setState] = useState(false)

    return (
        <div className="main">
            <h1>Counter</h1>
            <div className="value">
                {value}
            </div>
            <div className="button">
                {/*<button disabled={value === 5} onClick={incButtonHandler}>inc</button>*/}
                <Button disabled={value === maxValue} count={value} name={'inc'} callBack={incButtonHandler}/>
                {/*<button onClick={resetButtonHandler}>reset</button>*/}
                <Button disabled={value !== maxValue} name={'reset'} callBack={resetButtonHandler} count={value}/>
            </div>
        </div>
    );
};

