import React from "react";
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? 'tomato' : 'white',
    }
    const pipStyles = {
        backgroundColor: props.isHeld ? 'white' : '#333',
        boxShadow: props.isHeld ? 'inset 0 3px #efefef, inset 0 -3px #eee' : 'inset 0 3px #111, inset 0 -3px #555'
    }
    let pips = Number.isInteger(props.value)
        ? Array(props.value)
            .fill(0)
            .map((_, i) => <span className="pip" key={i} style={pipStyles} />)
        : null;
    return (
        <div className="face" onClick={props.hold} style={styles}>{pips}</div>
    )
};
