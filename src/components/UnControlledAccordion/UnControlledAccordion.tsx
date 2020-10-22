import React, {useState} from "react";


type UnControlledAccordionType = {
    titleValue: string
    // collapsed: boolean
}

function UnControlledAccordion(props: UnControlledAccordionType) {

    let [on, setOn] = useState(false);


    return <div>

        <AccordionTitle setOn={() => setOn(!on)} title={props.titleValue}/>

        {!on && <AccordionBody/>}
    </div>;
}


type AccordionTitlePropsType = {
    title: string
    setOn: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setOn()}>{props.title}</h3>
    )
};

type AccordionBodyPropsType = {}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}


export default UnControlledAccordion;