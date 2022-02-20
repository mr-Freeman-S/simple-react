import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type AccordionPropsType = {
    titleValue: string

}

const Accordion = (props:AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
  /*  const onClickHandler = () => {
      collapsed ? setCollapsed(false): setCollapsed(true);
    }*/
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle callback={onClickHandler} title={props.titleValue}/>
            { collapsed && <AccordionBody/> }
        </div>
    );
};

export default Accordion;