import React, {useState} from "react";

export type RatingValueType =  0|1|2|3|4|5

type RatingPropsType = {
    value: RatingValueType
    setValue: (n: RatingValueType)=> void
}


export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star value = {1} selected={props.value > 0} setValue = {props.setValue}/>
            <Star value = {2} selected={props.value > 1} setValue = {props.setValue}/>
            <Star value = {3} selected={props.value > 2} setValue = {props.setValue}/>
            <Star value = {4} selected={props.value > 3} setValue = {props.setValue}/>
            <Star value = {5} selected={props.value > 4} setValue = {props.setValue}/>
        </div>

    )

    }


type StarPropsType = {
    value: RatingValueType
    selected: boolean
    setValue: (n: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={()=> props.setValue(props.value) }>{props.selected ? <b>star </b> : 'star'} </span>
}