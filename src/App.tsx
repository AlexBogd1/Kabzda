import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UnControlledOnOff from "./components/UnControlledOnOff/UnControlledOnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {Select} from "./components/Select/Select";


function App() {

    let [value, setValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn,setSwitchOn] = useState(false);

    return (
        <div>
            <Accordion
                titleValue="Users"
                collapsed ={setAccordionCollapsed}
                value = {accordionCollapsed}
                onClick={(value) => alert(`User with id:${value} should be happy` )}
                items={[{title: 'Dimych', value: 1}, {title: "Viktor", value: 2}, {title: 'Elen', value: 3}]}/>
            <Rating value={value} setValue = {setValue}/>
            {switchOn.toString()}
            <OnOff onClick = {setSwitchOn} on ={switchOn}/>

        </div>
    );
}


type PagePropsType = {
    title: string
}


function PageTitle(props: PagePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;

