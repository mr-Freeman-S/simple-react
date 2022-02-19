import React from 'react';
import style from './OnOff.module.css'

type OnOffType = {
    switchOn : boolean
    setLight: (state:boolean)=> void
}

const OnOff = (props : OnOffType) => {

    const onClickButtonLight = (state:boolean) => {
        props.setLight(state)
    }
    return (
        <div className={style.main}>
            <button onClick={()=> {onClickButtonLight(true)}}>On</button>
            <button onClick={()=> {onClickButtonLight(false)}}>Off</button>
            {props.switchOn ? <div className={style.on}> </div> : <div className={style.off}> </div>}
        </div>
    );
};

export default OnOff;