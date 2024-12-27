import {Link, useLocation} from 'react-router-dom';

// Reflective XSS Component
const ReflectiveXSS = () => {
  const query = new URLSearchParams(useLocation().search);
  const userInput = query.get('input');

  return (
    <div className="container reflective-xss">
      <h1>Reflective XSS Example</h1>
      <ul>
        <li>Example 1: <a href="/reflective?input=<div%20onmouseover=alert('XSS')>Hover%20me!</div>">MouseOver XSS</a></li>
        <li>Example 2: <a href="/reflective?input=<img%20src=x%20onerror=alert(%27XSS%27)>">Image XSS</a></li>
        <li>Example 3: <a href="/reflective?input=&lt;svg%20xmlns=&quot;http://www.w3.org/2000/svg&quot;%20onload=&quot;alert('XSS')&quot;&gt;&lt;/svg&gt;">SVG Exploit</a></li>
        <li>Example 4: <a href="/reflective?input=<form%20onsubmit=&quot;alert('XSS')&quot;><button%20type=&quot;submit&quot;>Submit</button></form>">FORM Exploit</a></li>
      </ul>
      <p>Input from query:</p>
      <div dangerouslySetInnerHTML={{ __html: userInput }}></div>
      <Link to="/" className="link-back">Go Back</Link>
    </div>
  );
};

export default ReflectiveXSS;