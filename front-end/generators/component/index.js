/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'styled',
      default: false,
      message: 'Do you want to create a styled component',
    },
    {
      type: 'confirm',
      name: 'mobx',
      default: true,
      message: 'Do you want to create a styled component access to mobx ',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../src/Components/{{properCase name}}.tsx',
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/Components/{{properCase name}}.test.tsx',
        templateFile: './component/test.tsx.hbs',
        abortOnFail: true,
      },
    ];


    actions.push({
      type: 'prettify',
      path: '/Components/',
    });

    return actions;
  },
};
