/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class MainCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  keyClick = (x) => {
    const { result } = this.state;
    const newValue = calculate(result, x.target.innerText);
    this.setState({ result: newValue });
    const totalElement = document.getElementById('total');
    totalElement.innerHTML = newValue.next || newValue.total || 0;
  };

  render() {
    return (
      <div className="main">
        <p id="total">{0}</p>
        <div className="mainKeyPad">
          <button
            name="AC"
            type="button"
            className="greyKey"
            onClick={this.keyClick}
          >
            AC
          </button>
          <button type="button" className="greyKey" onClick={this.keyClick}>
            +/-
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            %
          </button>
          <button type="button" onClick={this.keyClick} className="signs">
            ÷
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            7
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            8
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            9
          </button>
          <button type="button" onClick={this.keyClick} className="signs">
            x
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            4
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            5
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            6
          </button>
          <button type="button" onClick={this.keyClick} className="signs">
            -
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            1
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            2
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            3
          </button>
          <button type="button" onClick={this.keyClick} className="signs">
            +
          </button>
          <button
            type="button"
            onClick={this.keyClick}
            className="greyKey extra1"
          >
            {' '}
          </button>
          <button
            type="button"
            onClick={this.keyClick}
            className="greyKey extra2"
          >
            0
          </button>
          <button type="button" onClick={this.keyClick} className="greyKey">
            .
          </button>
          <button type="button" onClick={this.keyClick} className="signs">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default MainCalculator;
