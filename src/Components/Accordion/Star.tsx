import React from 'react';

type StarType = {
    selected: boolean
    callback: ()=>void
}

const Star = (props: StarType) => {

    console.log('Star rendering')
    return props.selected ? <span onClick={props.callback} ><b>Star </b></span> : <span onClick={props.callback}>Star </span>

};

export default Star;