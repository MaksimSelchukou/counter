import React, {useState} from 'react';
import {Button} from "./components/button/Button";
import './Counter.css'


type CounterPropsType = {
    minValue: number
    maxValue: number
    incButtonHandler: () => void
    resetButtonHandler: () => void
}


export const Counter = ({minValue, maxValue, incButtonHandler, resetButtonHandler}: CounterPropsType) => {


    return (
        <div className="main">

            <div className="value">
                <h1>Counter</h1>
                <div className="value-count">{minValue}</div>
            </div>

            <div className="buttons">
                <Button disabled={minValue === maxValue} count={minValue} name={'inc'} callBack={incButtonHandler}/>
                <Button disabled={minValue !== maxValue} name={'reset'} callBack={resetButtonHandler} count={minValue}/>
            </div>
        </div>
    );
};

