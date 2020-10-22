import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion from "./Accordion";

export default {
    title: 'Accordion-example',
    component: Accordion,
};


const callback = action('Collapsed');
const onClickCallback = action('some item was clicked');

export const CollapsedAccordion = () => <Accordion titleValue={'Collapsed Accordion'}
                                                   collapsed={callback}
                                                   value={true}
                                                   items={[]}
                                                   onClick={onClickCallback}
/>
export const UnCollapsedAccordion = () => <Accordion titleValue={'Collapsed Accordion'}
                                                     collapsed={action('UnCollapsed')}
                                                     value={false}
                                                     items={[{title: 'Dimych', value: 1}, {title: "Viktor", value: 2}, {title: 'Elen', value: 3}]}
                                                     onClick={onClickCallback}/>


export const ChangeValue = () => {
    const [switchOn, setSwitchOn] = useState(false);
    return <Accordion titleValue={'Mutable Accordion'}
                      collapsed={() =>setSwitchOn(!switchOn)}
                      value={switchOn}
                      items={[{title: 'Dimych', value: 1}, {title: "Viktor", value: 2}, {title: 'Elen', value: 3}]}
                      onClick={(value) => alert(`User with id:${value} should be happy` )}
    />
}



