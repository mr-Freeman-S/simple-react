import React from 'react';

type StarType = {
    selected: boolean
}

const Star = (props: StarType) => {
    console.log('Star rendering')
    return props.selected ? <span><b>Star </b></span> : <span>Star </span>

};

export default Star;