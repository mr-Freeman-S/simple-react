import React from 'react';
import Star from "./Star";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

const Rating = (props:RatingPropsType) => {
    return (
        <div>
            Rating
{/*
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
*/}

        </div>
    );
};

export default Rating;