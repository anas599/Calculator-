import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';

import MainCalculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/Math-magicians">Home</Link>
              </li>
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/quote">Quotes</Link>
              </li>
            </ul>
          </nav>
          <h1>Math Magicians</h1>
        </header>
        <Routes>
          <Route path="/Math-magicians" element={<Home />} />
          <Route path="/calculator" element={<MainCalculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
