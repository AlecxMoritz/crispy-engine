import React from 'react';

import { Header } from './Button';

export default {
  title: 'Example/H1',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello World',
};
