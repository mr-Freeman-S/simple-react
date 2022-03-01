import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
            <h3 onClick={props.onClick}>{props.title}</h3>
    );
};

export default AccordionTitle;