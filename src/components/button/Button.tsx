import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    count:number
    disabled:boolean
}

export const Button = (props: ButtonType) => {

    const buttonOnclickHandler = () => {
        props.callBack()
    }


    return (
        <div>
            <button style={{marginTop:"10px"}} disabled={props.disabled} onClick={buttonOnclickHandler}>{props.name}</button>
        </div>
    );
};
