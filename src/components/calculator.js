import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const MainCalculator = () => {
  const [result, setResult] = useState(0);

  const keyClick = (x) => {
    setResult((oldVar) => calculate(oldVar, x.target.innerText));
  };

  return (
    <>
      <div className="base">
        <div className="main">
          <p id="total">
            {result.next || result.operation || result.total || 0}
          </p>
          <div className="mainKeyPad">
            <Button keyPad="AC" onClick={keyClick} className="greyKey" />
            <Button keyPad="+/-" onClick={keyClick} className="greyKey" />
            <Button keyPad="%" onClick={keyClick} className="greyKey" />
            <Button keyPad="+" onClick={keyClick} className="signs" />
            <Button keyPad="9" onClick={keyClick} className="greyKey" />
            <Button keyPad="8" onClick={keyClick} className="greyKey" />
            <Button keyPad="7" onClick={keyClick} className="greyKey" />
            <Button keyPad="x" onClick={keyClick} className="signs" />
            <Button keyPad="4" onClick={keyClick} className="greyKey" />
            <Button keyPad="5" onClick={keyClick} className="greyKey" />
            <Button keyPad="6" onClick={keyClick} className="greyKey" />
            <Button keyPad="-" onClick={keyClick} className="signs" />
            <Button keyPad="1" onClick={keyClick} className="greyKey" />
            <Button keyPad="2" onClick={keyClick} className="greyKey" />
            <Button keyPad="3" onClick={keyClick} className="greyKey" />
            <Button keyPad="+" onClick={keyClick} className="signs" />
            <Button keyPad=" " onClick={keyClick} className="greyKey extra1" />
            <Button keyPad="0" onClick={keyClick} className="greyKey extra2" />
            <Button keyPad="." onClick={keyClick} className="greyKey " />
            <Button keyPad="=" onClick={keyClick} className="signs" />
          </div>
        </div>
        <div>
          <h2>Lets do some Math!</h2>
        </div>
      </div>
    </>
  );
};

export default MainCalculator;
