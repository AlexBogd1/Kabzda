import React, {useState} from 'react'
import style from './UnControlledOnOff.module.css'


type UnControlledOnOff = {
    onChange: (on:boolean) => void
}


function UnControlledOnOff(props: UnControlledOnOff) {

    let [on, setOn] = useState(false);

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = ()=> {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={style.container}>
            <button onClick={onClicked} className={`${(on && style.on)}`}>
                on
            </button>
            <button onClick={offClicked} className={'' + (!on && style.off)}>
                of
            </button>
            <div className={style.circle + ' ' + (on ? style.on : style.off)}>

            </div>
        </div>
    )
}

export default UnControlledOnOff;