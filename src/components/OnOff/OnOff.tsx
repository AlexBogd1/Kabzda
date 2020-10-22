import React, {useState} from 'react'
import style from './OnOff.module.css'


type OnOffType = {
    on: boolean
    onClick: (on: boolean)=> void
}


function OnOff(props: OnOffType ) {

    return (
        <div className={style.container}>
            <button onClick={() => {props.onClick(true)} } className={`${(props.on && style.on)}`}>
                on
            </button>
            <button onClick={() =>{ props.onClick(false)}} className={''+(!props.on && style.off)}>
                of
            </button>
            <div className={style.circle + ' '+ (props.on ? style.on: style.off)}>

            </div>
        </div>
    )
}

export default OnOff;