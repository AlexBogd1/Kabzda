import React, {useState} from "react";
import style from './Select.module.css'

type SelectType = {
    values: string[]
    setActiveValue: (activeValue: string) => void
    activeValue: string
    collapseSelect: () => void
    collapsed: boolean
}

export function Select(props: SelectType) {
    const [hoveredElement, setHoveredElement] = useState(props.activeValue)

    return (
        <div>


            <div className={style.wrapper}>
                <div
                    onClick={() => props.collapseSelect()}>
                    <b>{props.activeValue}</b>
                </div>
                <div className={style.abs}>
                    {!props.collapsed && props.values.map((value, index) =>
                        <div className={style.item + " " + (hoveredElement === value ? style.itemHover : '')}
                             key={index}
                             onMouseEnter={() => setHoveredElement(value)}
                             onClick={() => {
                                 props.setActiveValue(value);
                                 props.collapseSelect()
                             }}>
                            {value}
                        </div>)}
                </div>

            </div>
            <div>sdadsssssssssssssssssssssssssss</div>

        </div>


    )

}




