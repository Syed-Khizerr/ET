// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from Parent Component!";
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Parent Component</h2>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;

// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Child Component</h3>
      <p>{props.message}</p> {/* Accessing prop here */}
    </div>
  );
}

export default ChildComponent;
