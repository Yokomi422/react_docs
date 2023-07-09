import React, { MouseEvent } from "react";

function App() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default App;
