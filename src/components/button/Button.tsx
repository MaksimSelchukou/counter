import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    count:number
}

export const Button = (props: ButtonType) => {

    const buttonOnclickHandler = () => {
        props.callBack()
    }


    return (
        <>
            <button disabled={props.count === 5} onClick={buttonOnclickHandler}>{props.name}</button>
        </>
    );
};
