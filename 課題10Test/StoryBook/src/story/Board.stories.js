import React from 'react';

import { Board } from "../components/tutorial";
import * as SquareStories from './Square.stories';

export default {
  component: Board,
  title: 'Board',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
  squares: [
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
    SquareStories.Default.args.value,
  ]
};

export const Maru = Template.bind({});
Maru.args = {
    squares: Array(9).fill('○'),
};

export const Batsu = Template.bind({});
Batsu.args = {
    squares: Array(9).fill('×'),
};

export const Sankaku = Template.bind({});
Sankaku.args = {
    squares: Array(9).fill('△'),
};