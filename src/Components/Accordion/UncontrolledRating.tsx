import React, {useState} from 'react';
import Star from "./Star";

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value:1 | 2 | 3 | 4 | 5) => void
}

const Rating = (props: RatingPropsType) => {

    return (
        <div>

            <Star callback={()=>{props.setValue(1)}} selected={props.value > 0}/>
            <Star callback={()=>{props.setValue(2)}} selected={props.value > 1}/>
            <Star callback={()=>{props.setValue(3)}} selected={props.value > 2}/>
            <Star callback={()=>{props.setValue(4)}} selected={props.value > 3}/>
            <Star callback={()=>{props.setValue(5)}} selected={props.value > 4}/>

        </div>
    );
};

export default Rating;