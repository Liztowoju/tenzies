import React from "react";

export default function Die(prop){
    return(
        <div className="die-look">
        <h3 className="die-num">{prop.value}</h3>
        </div>
    )

}