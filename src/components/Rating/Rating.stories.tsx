import React, {useState} from 'react'
import {Story, Meta} from '@storybook/react'

import {Rating, RatingValueType} from './Rating'

export default {
    title: 'Rating',
    component: Rating
} as Meta

export const EmptyRating = () => <Rating value={0} onClick={() => alert(1)} />
export const Rating1 = () => <Rating value={1} onClick={() => alert(1)} />
export const Rating2 = () => <Rating value={2} onClick={() => alert(1)} />
export const Rating3 = () => <Rating value={3} onClick={() => alert(1)} />
export const Rating4 = () => <Rating value={4} onClick={() => alert(1)} />
export const Rating5 = () => <Rating value={5} onClick={() => alert(1)} />
export const RatingChange = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating} />
}

//
// const Template: Story<ButtonProps> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
