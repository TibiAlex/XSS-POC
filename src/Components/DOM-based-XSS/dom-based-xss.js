import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// DOM-based XSS Component
const DOMBasedXSS = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
    document.getElementById('domOutput').innerHTML = userInput; // Direct DOM manipulation
  };

  const handleExampleClick = (example) => {
    setInput(example); // Update input state with the clicked example
    document.getElementById('domOutput').innerHTML = example; // Update DOM output
  };

  return (
    <div className="container reflective-xss">
      <h1>DOM-based XSS Example</h1>
      <ul>
        <li>
          Example 1:{" "}
          <a
            href="#"
            onClick={() =>
              handleExampleClick('<div><img src="x" onerror="alert(\'XSS\')" /></div>')
            }
          >
            Image stored XSS
          </a>
        </li>
        <li>
          Example 2:{" "}
          <a
            href="#"
            onClick={() =>
              handleExampleClick('<img sRc="x" oNErroR="alert(\'XSS\')" />')
            }
          >
            Image stored XSS caption exploit
          </a>
        </li>
        <li>
          Example 3:{" "}
          <a
            href="#"
            onClick={() =>
              handleExampleClick('<a href="#" onclick="alert(\'Stored XSS\')">Click me</a>')
            }
          >
            Link exploit XSS
          </a>
        </li>
        <li>
          Example 4:{" "}
          <a
            href="#"
            onClick={() =>
              handleExampleClick(
                '<div title="XSS" onmouseover="alert(\'Stored XSS\')">Hover over me</div>'
              )
            }
          >
            Mouse hover XSS
          </a>
        </li>
      </ul>
      <input
        type="text"
        value={input} // Bind input value to state
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Rendered Content:</p>
      <div id="domOutput"></div>
      <Link to="/" className="link-back">
        Go Back
      </Link>
    </div>
  );
};

export default DOMBasedXSS;
