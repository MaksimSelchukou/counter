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
        <>
            <button disabled={props.disabled} onClick={buttonOnclickHandler}>{props.name}</button>
            {/*<button className={props.name === "inc"? "active":""} disabled={props.disabled} onClick={buttonOnclickHandler}>{props.name}</button>*/}
        </>
    );
};
