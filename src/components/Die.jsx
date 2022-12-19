import React from "react";

export default function Die(props) {
    return (
        <div className="die-look" onClick = {() => props.handleClick(props.value)}>
            <h3 className="die-num">{props.value}</h3>
        </div>
    )

}