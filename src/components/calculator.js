import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

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
    const mainDisplay = document.getElementById('total');
    mainDisplay.innerHTML = newValue.next || newValue.total || 0;
  };

  render() {
    return (
      <div className="main">
        <p id="total">{0}</p>
        <div className="mainKeyPad">
          <Button keyPad="AC" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="+/-" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="%" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="+" onClick={this.keyClick} className="signs" />
          <Button keyPad="9" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="8" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="7" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="x" onClick={this.keyClick} className="signs" />
          <Button keyPad="4" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="5" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="6" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="-" onClick={this.keyClick} className="signs" />
          <Button keyPad="1" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="2" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="3" onClick={this.keyClick} className="greyKey" />
          <Button keyPad="+" onClick={this.keyClick} className="signs" />
          <Button keyPad=" " onClick={this.keyClick} className="greyKey extra1" />
          <Button keyPad="0" onClick={this.keyClick} className="greyKey extra2" />
          <Button keyPad="." onClick={this.keyClick} className="greyKey " />
          <Button keyPad="=" onClick={this.keyClick} className="signs" />
        </div>
      </div>
    );
  }
}

export default MainCalculator;
