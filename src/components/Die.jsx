import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }


    function stringifyNumber(n) {

        var special = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
        var deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];


        if (n < 20) return special[n];
        if (n % 10 === 0) return deca[Math.floor(n / 10) - 2] + 'ieth';
        return deca[Math.floor(n / 10) - 2] + 'y-' + special[n % 10];
    }

    var dots = [];
    for (var i = 0; i < props.value; i++) {
        // <>
        {/* // if(i > 3) */}
        // dots.push(<div className="fourth-face dice">);
        dots.push(<span className='dot' key={i}></span>);
        {/* </> */}
    }

    return (


    // return indents;
    // <div
    //     className="die-look"
    //     style={styles}
    //     onClick={props.hold}
    // >
    //     <h3
    //         className="die-num" >
    //         {props.value}
    //     </h3>
    // </div>
    <div className={'dice ' + stringifyNumber(props.value) + '-face'}>
        {dots}
    </div>
    )

}