import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: (on: boolean) => void
    value: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle onClick = {() => {props.collapsed(!props.value)}} title= {props.titleValue}/>
        {!props.value && <AccordionBody items = {props.items} onClick={props.onClick}/>}
    </div>;
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType){
    return(
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
};


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType){
    return(
        <ul>
            {props.items.map((item,index) => <li onClick = {() => props.onClick(item.value)} key = {index}>{item.title}</li>)}
        </ul>
    )
}



export default Accordion;