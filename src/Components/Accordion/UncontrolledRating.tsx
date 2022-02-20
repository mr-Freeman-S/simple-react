import React, {useState} from 'react';
import Star from "./Star";

type RatingPropsType = {
}

const Rating = (props:RatingPropsType) => {
    const [value,setValue] = useState(0)
    const onClickSetValue = (key:number) => {
      setValue(key)
    }
    return (
        <div>

            <Star id={1} callback={onClickSetValue} selected={value > 0}/>
            <Star id={2} callback={onClickSetValue} selected={value > 1}/>
            <Star id={3} callback={onClickSetValue} selected={value > 2}/>
            <Star id={4} callback={onClickSetValue} selected={value > 3}/>
            <Star id={5} callback={onClickSetValue} selected={value > 4}/>

        </div>
    );
};

export default Rating;