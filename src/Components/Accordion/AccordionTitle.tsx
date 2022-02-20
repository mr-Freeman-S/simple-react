import React from 'react';

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={props.callback}>{props.title}</h3>
        </div>
    );
};

export default AccordionTitle;