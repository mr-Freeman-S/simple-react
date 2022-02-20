import React from 'react';

type StarType = {
    selected: boolean
    callback: (key:number)=>void
    id:number
}

const Star = (props: StarType) => {
    const onClickHandler = () => {
        props.callback(props.id)
    }
    console.log('Star rendering')
    return props.selected ? <span onClick={onClickHandler} ><b>Star </b></span> : <span onClick={onClickHandler}>Star </span>

};

export default Star;