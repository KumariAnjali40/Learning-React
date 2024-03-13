import React, { useState } from 'react';

function Counter({onUpdate}) {
  // Define a state variable "count" and a function "setCount" to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    const newCount=count+1;
    setCount(newCount);
    onUpdate(newCount);
  };

  // Render the component
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
