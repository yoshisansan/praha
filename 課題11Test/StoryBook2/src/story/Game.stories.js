import React from 'react';

import Game from "../components/tutorial";

export default {
  component: Game,
  title: 'Game',
};

const Template = args => <Game {...args} />;

export const Default = Template.bind({});