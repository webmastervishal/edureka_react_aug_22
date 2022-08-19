import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const First = () => {
  const [count, setCount] = useTitle(0);
  return (
    <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
  );
};

export default First;
