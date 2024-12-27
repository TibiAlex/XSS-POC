import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import StoredXSS from './Components/Stored-XSS/stored-xss';
import ReflectiveXSS from './Components/Reflective-XSS/reflective-xss';
import DOMBasedXSS from './Components/DOM-based-XSS/dom-based-xss';
import './xss_styles.css';


// Main App Component
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container main-page">
                <h1>XSS Examples</h1>
                <div className="button-container">
                  <Link to="/reflective">
                    <button>Reflective XSS</button>
                  </Link>
                  <br />
                  <Link to="/stored">
                    <button>Stored XSS</button>
                  </Link>
                  <br />
                  <Link to="/dom-based">
                  <button>DOM-based XSS</button>
                  </Link>
                </div>
              </div>
            }
          />
          <Route path="/reflective" element={<ReflectiveXSS />} />
          <Route path="/stored" element={<StoredXSS />} />
          <Route path="/dom-based" element={<DOMBasedXSS />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
