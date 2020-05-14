import React from 'react';

const squre = (props) => {
    const player = props.value
    console.log(player)
    if(player != undefined){
    if (player.simbole === 'x') {
        return (
            <button className="squre" onClick={props.onClick}>  </button>
        )
    } else if (player.simbole === 'o')
        return (
            <button className="squretwo" onClick={props.onClick}>  </button>
        )
    }
    else {
        return (<button className="squreblank" onClick={props.onClick}>  </button>)
    }
}

export default squre;

 