import React, {useState} from 'react';


import {action} from "@storybook/addon-actions";
import OnOff from "./OnOff";

export default {
  title: 'OnOff-example',
  component: OnOff,
};


export const OnClickStyle = () => <OnOff on={true} onClick={action('turned on')} />
export const OffClickStyle = () => <OnOff on={false} onClick={action('turned off')}/>

export const ModeChangingValue = () => {

  const [turnValue, setTurnValue] = useState<boolean>(true);
  return <OnOff on={turnValue} onClick={setTurnValue}/>
}



