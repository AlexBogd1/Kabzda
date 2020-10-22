import React, {useState} from 'react';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
  title: 'UnControlledRating-example',
  component: UncontrolledRating,
};
export const EmptyRating = () => <UncontrolledRating defaultValue={0} />
export const UncontrolledRating1= () => <UncontrolledRating defaultValue={1} />
export const UncontrolledRating2= () => <UncontrolledRating defaultValue={2} />
export const UncontrolledRating3= () => <UncontrolledRating defaultValue={3} />
export const UncontrolledRating4= () => <UncontrolledRating defaultValue={4} />
export const UncontrolledRating5= () => <UncontrolledRating defaultValue={5} />






