import React, {KeyboardEvent,ChangeEvent} from 'react';

type InputType={
    callBack1:(e:ChangeEvent<HTMLInputElement>)=>void
    callBack2:(e:KeyboardEvent<HTMLInputElement>)=>void
}


export const Input = (props:InputType) => {

    const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
        props.callBack1(e)
    }

    const onKeyPressHandler =(e:KeyboardEvent<HTMLInputElement>)=>{
        props.callBack2(e)
    }


    return (
        <>
            <input onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
        </>
    );
};

