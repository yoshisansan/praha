import React from 'react';
import { Square } from '../components/tutorial';

export default {
  component: Square,
  title: 'Square',
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: null,
};

export const Maru = Template.bind({});
Maru.args = {
  value: '○',
};

export const Batsu = Template.bind({});
Batsu.args = {
  value: '×',
};

export const Sankaku = Template.bind({});
Sankaku.args = {
  value: '△',
};
