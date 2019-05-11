# react-pseudostyler

> Allows a React component to be rendered with pseudo-class styles applied

[![NPM](https://img.shields.io/npm/v/react-pseudostyler.svg)](https://www.npmjs.com/package/react-pseudostyler)

## Why does this component exist?

Have you ever wanted to take a visual snapshot of a component in a certain state, say, with a hover style applied? Looking for a way to apply styles defined by a pseudo-class using JavaScript, only to find out [you can't](https://stackoverflow.com/a/17226753/10236643)?

We've got your back.

## Install

```bash
npm install --save react-pseudostyler
```

## Usage

Wrap your component in `PseudoStyler`.

Props:

- `selector`: the pseudo-class you'd like to applied, for example `:active` or `:hover`
- `target`: a function that allows you to target a specific html element. The function is passed a single argument with [queries from dom-testing-library](https://testing-library.com/docs/dom-testing-library/api-queries). The function should return the element you wish to apply pseudo-classes to.

```jsx
import React, { Component } from 'react';
import PseudoStyler from 'react-pseudostyler';

class Example extends Component {
  render() {
    return (
      <PseudoStyler
        selector=":hover"
        target={({ getByText }) => getByText(/I have hover styles!/i)}
      >
        <MyCoolComponent>I have hover styles!</MyCoolComponent>
      </PseudoStyler>
    );
  }
}
```

## Credit

The bulk of the logic in this component was pilfered from https://github.com/TSedlar/pseudo-styler, with a few small changes to provide easier usage from React.

## License

MIT © [CraigCav](https://github.com/CraigCav)
