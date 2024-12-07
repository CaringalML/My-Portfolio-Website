import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/home';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Portfolio />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;