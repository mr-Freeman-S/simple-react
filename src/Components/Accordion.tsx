import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

const Accordion = (props:AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/> }
        </div>
    );
};

export default Accordion;