import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import UnControlledOnOff from "./UnControlledOnOff";

export default {
  title: 'UnControlledOnOff-example',
  component: UnControlledOnOff,
};

export const ChangingValue = () => {

  const [turnValue, setTurnValue] = useState<boolean>(true);
  return <UnControlledOnOff  onChange={setTurnValue}/>
}



