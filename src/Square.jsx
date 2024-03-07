import {useState} from "react";

export default function Square({value,onClick}) {
    // Make the ui proper
    // put as low as possible first

    return (
        <>
            <button onClick={onClick} className="square">{value}</button>
        </>
    )
        ;
}
