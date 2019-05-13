import React, { Component } from 'react';
import PseudoStyler from 'react-pseudostyler';

export default class App extends Component {
  render() {
    return (
      <PseudoStyler
        selector=":hover"
        target={({ getByText }) => getByText(/I have hover styles!/i)}
      >
        <div id="test" className="yellowOnHover">
          <div id="thing">I have hover styles!</div>
        </div>
      </PseudoStyler>
    );
  }
}
