import React, {useState, KeyboardEvent} from "react";
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


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        for (let i = 0; i < props.values.length; i++) {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                const pretendElement = e.key === "ArrowDown" ? props.values[i + 1] : props.values[i - 1]
                if (props.values[i] === hoveredElement) {
                    props.setActiveValue(pretendElement);
                    setHoveredElement(pretendElement);
                }
                if (props.values[i] === hoveredElement && props.values[i] === props.values[0] && e.key === "ArrowUp") {
                    props.setActiveValue(props.values[props.values.length - 1]);
                    setHoveredElement(props.values[props.values.length - 1]);
                }
                if (props.values[i] === hoveredElement && props.values[i] === props.values[props.values.length -1] && e.key === "ArrowDown") {
                    props.setActiveValue(props.values[0]);
                    setHoveredElement(props.values[0]);
                }
            }
            if(e.key === "Enter" || e.key === "Escape"){
                props.collapseSelect();
            }

        }
    }

    return (
        <div>


            <div className={style.wrapper} onKeyUp={onKeyUp} tabIndex={0}>
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




