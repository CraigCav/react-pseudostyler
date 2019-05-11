import React, { Component } from 'react';
import PseudoStyler from 'react-pseudostyler';

export default class App extends Component {
  render() {
    return (
      <PseudoStyler
        selector=":hover"
        target={({ getByText }) => getByText(/I have hover styles!/i)}
      >
        <div id="test" class="yellow">
          <div id="thing">hi</div>
        </div>
      </PseudoStyler>
    );
  }
}
