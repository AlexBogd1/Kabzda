import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Select',
  component: Select,
};

const selectValues: string[] = [
  'Minsk', "Kiev", 'Warshaw', 'Riga','Berlin'
]


export const unCollapsedSelect = () => <Select values={selectValues} setActiveValue={action('set active value')} activeValue={selectValues[0]} collapseSelect={action('collaps select')} collapsed={false}/>
export const collapsedSelect = () => <Select values={selectValues} setActiveValue={action('set active value')} activeValue={selectValues[0]} collapseSelect={action('collaps select')} collapsed={true}/>

export const ChangeValue = () => {

  const [activeValue, setActiveValue] = useState<string>(selectValues[0]);
  const [collaps, setCollaps] = useState<boolean>(true)

  return <Select activeValue={activeValue}
                 values={selectValues}
                 setActiveValue={(activeValue) => setActiveValue(activeValue)}
                 collapseSelect= {() => setCollaps(!collaps)}
                 collapsed = {collaps}
  />
}



