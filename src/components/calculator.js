import React, { Component } from 'react';

class MainCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main">
        <p id="total">0</p>
        <div className="mainKeyPad">
          <button type="button" className="greyKey">
            AC
          </button>
          <button type="button" className="greyKey">
            +/-
          </button>
          <button type="button" className="greyKey">
            %
          </button>
          <button type="button" className="signs">
            ÷
          </button>
          <button type="button" className="greyKey">
            7
          </button>
          <button type="button" className="greyKey">
            8
          </button>
          <button type="button" className="greyKey">
            9
          </button>
          <button type="button" className="signs">
            X
          </button>
          <button type="button" className="greyKey">
            4
          </button>
          <button type="button" className="greyKey">
            5
          </button>
          <button type="button" className="greyKey">
            6
          </button>
          <button type="button" className="signs">
            -
          </button>
          <button type="button" className="greyKey">
            1
          </button>
          <button type="button" className="greyKey">
            2
          </button>
          <button type="button" className="greyKey">
            3
          </button>
          <button type="button" className="signs">
            +
          </button>
          <button type="button" className="greyKey extra1">
            {' '}
          </button>
          <button type="button" className="greyKey extra2">
            0
          </button>
          <button type="button" className="greyKey">
            .
          </button>
          <button type="button" className="signs">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default MainCalculator;
