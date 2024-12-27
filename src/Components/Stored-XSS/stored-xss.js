import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Stored XSS Component
const StoredXSS = () => {
  const [storedInput, setStoredInput] = useState(localStorage.getItem('storedXSS') || '');
  const [input, setInput] = useState('');

  const handleSave = () => {
    localStorage.setItem('storedXSS', input);
    setStoredInput(input);
  };

  // Clear the stored content
  const clearStoredInput = () => {
    localStorage.removeItem('storedXSS');
    setStoredInput('');
  };

  // Handle clicking on an example and setting it in the textarea
  const handleExampleClick = (text) => {
    setInput(text);
  };

  return (
    <div className="container reflective-xss">
      <h1>Stored XSS Example</h1>
      <ul>
        <li>Example 1: <a href="#" onClick={() => handleExampleClick('<div><img src="x" onerror="alert(\'XSS\')" /></div>')}>Image stored XSS</a></li>
        <li>Example 2: <a href="#" onClick={() => handleExampleClick('<img sRc="x" oNErroR="alert(\'XSS\')" />')}>Image stored XSS caption exploit</a></li>
        <li>Example 3: <a href="#" onClick={() => handleExampleClick('<a href="#" onclick="alert(\'Stored XSS\')">Click me</a>')}>Link exploit XSS</a></li>
        <li>Example 4: <a href="#" onClick={() => handleExampleClick('<div title="XSS" onmouseover="alert(\'Stored XSS\')">Hover over me</div>')}>Mouse hover XSS</a></li>
      </ul>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text..."></textarea>
      <button onClick={handleSave}>Save</button>
      <button onClick={clearStoredInput} className="clear-button">Clear Stored Content</button>
      <p>Stored Content:</p>
      <div dangerouslySetInnerHTML={{ __html: storedInput }}></div>
      <Link to="/" className="link-back">Go Back</Link>
    </div>
  );
};

export default StoredXSS;
