import React from "react";

export default function Die(props) {
    return (
        <div className="die-look">
            <h3 className="die-num">{props.value}</h3>
        </div>
    )

}