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
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MainCalculator />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
