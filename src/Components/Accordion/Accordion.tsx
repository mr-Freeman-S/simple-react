import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string

}

const Accordion = (props:AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    const onClickHandler = () => {
      collapsed ? setCollapsed(false): setCollapsed(true);
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={onClickHandler}>TOGGLE</button>
            { collapsed && <AccordionBody/> }
        </div>
    );
};

export default Accordion;