import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={updateCount}>Count is: {count}</button>
    </>
  );
}

function Button() {
  return (
    <img
      height="300px"
      width="300px"
      href="https://ik.imagekit.io/vituepzjm/EESAI/vaavathi.jpg?updatedAt=1685473108406"
      alt="santhosh"
    />
  );
}
