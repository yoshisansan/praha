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
  squares: [
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
    SquareStories.Maru.args.value,
  ]
};

export const Batsu = Template.bind({});
Batsu.args = {
  squares: [
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
    SquareStories.Batsu.args.value,
  ]
};

export const Sankaku = Template.bind({});
Sankaku.args = {
  squares: [
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
    SquareStories.Sankaku.args.value,
  ]
};