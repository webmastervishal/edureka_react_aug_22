import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const Second = () => {
  const [count, setCount] = useTitle(10);

  return (
    <button onClick={() => setCount(count - 1)}>Decrement: {count}</button>
  );
};

export default Second;
