import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle onClick={() => {
                props.setCollapsed(!props.collapsed)
            }} title={props.titleValue}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    );
};

export default Accordion;