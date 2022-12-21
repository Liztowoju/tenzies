import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }

    return (
        <div
            className="die-look"
            style={styles}
            onClick={props.hold}
        >
            <h3
                className="die-num" >
                {props.value}
            </h3>
        </div>
    )

}