import React from 'react';
import { Game } from '../components/tutorial';

export default {
  component: Game,
  title: 'Game',
};

const Template = (args) => <Game {...args} />;
export const Default = Template.bind({});
Default.args = {
  handleClick: () => null,
  history: [{ squares: Array(9).fill(null) }],
  current: { squares: Array(9).fill(null) },
  status: false,
  jumpTo: () => null,
};

export const Draw = Template.bind({});
Draw.args = {
  handleClick: () => null,
  history: [{ squares: Array(9).fill('○') }],
  current: { squares: ['X', 'X', '○', '○', 'X', 'X', 'X', '○', '○'] },
  status: 'Draw!',
  jumpTo: () => null,
};
