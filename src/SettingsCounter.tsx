import React, {KeyboardEvent,ChangeEvent, useState} from 'react';
import './SettingsCounter.css'
import {Button} from "./components/button/Button";
import {Input} from "./components/Input";

type SettingsCounterType = {
    getValueInputMin: (value: number) => void
    getValueInputMax: (value: number) => void
}

export const SettingsCounter = (props: SettingsCounterType) => {

    const [minValue, setMinValue] = useState('')
    const [maxValue, setMaxValue] = useState('')


    const inputMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
    }
    const inputMaxChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        setMaxValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.getValueInputMin(+minValue)
        props.getValueInputMax(+maxValue)
    }
    const onKeyPressHandlerMin = (e:KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter'){
            props.getValueInputMin(+minValue)
            setMinValue('')
        }
    }
    const onKeyPressHandlerMax = (e:KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter'){
            props.getValueInputMax(+maxValue)
            setMaxValue('')
        }
    }

    return (
        <div className="mainS">
            <h1 className="sc">Settings Counter</h1>
            <div className="divInput">
                <h2>min Value</h2>
                <Input callBack1={inputMinChangeHandler} callBack2={onKeyPressHandlerMin}/>
                <h2>max Value</h2>
                <Input callBack1={inputMaxChangeHandler} callBack2={onKeyPressHandlerMax}/>
                <Button count={0} name={"Отправить"} callBack={onClickHandler}  disabled={false}/>
            </div>
        </div>
    );
};

