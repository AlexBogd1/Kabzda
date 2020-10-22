import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Select-example',
  component: Rating,
};


export const EmptyRating = () => <Rating value={0} setValue={action('rating 1 star')} />
export const Rating1= () => <Rating value={1} setValue={action('rating 1 star')} />
export const Rating2= () => <Rating value={2} setValue={action('rating 2 star')} />
export const Rating3= () => <Rating value={3} setValue={action('rating 3 star')} />
export const Rating4= () => <Rating value={4} setValue={action('rating 4 star')} />
export const Rating5= () => <Rating value={5} setValue={action('rating 5 star')} />

export const ChangeValue = () => {

  const [rating, setRating] = useState<RatingValueType>(3);
  return <Rating value={rating} setValue={setRating} />
}



