const { addDecorator } = require('@storybook/react');
// const { withPropsTable } = require('storybook-addon-react-docgen');
const { withPerformance } = require('storybook-addon-performance');

// addDecorator(withPropsTable);
addDecorator(withPerformance);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
