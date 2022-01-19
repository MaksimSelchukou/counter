import React, {useState} from 'react';

import s from './Counter.module.css'
import {Button} from "../button/Button";

export const Counter = () => {
    const [value, setValue] = useState(0)

    const incButtonHandler = () => {
        setValue(value + 1)
    }

    const resetButtonHandler = () => {
        setValue(0)
    }


    return (
        <div className={s.main}>
            <h1>Counter</h1>
            <div className={s.value}>
                {value}
            </div>
            <div className={s.button}>
                <button disabled={value === 5} onClick={incButtonHandler}>inc</button>
                {/*<Button count={value} name={'inc'} callBack={incButtonHandler}/>*/}
                <button onClick={resetButtonHandler}>reset</button>
                {/*<Button name={'reset'} callBack={resetButtonHandler} count={value}/>*/}
            </div>
        </div>
    );
};

