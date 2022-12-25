import React, { useEffect, useState } from "react";

export default function UseEffectFn() {
  const [count, setCount] = useState(0);
  const [comp, setComp] = useState(false);

  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("componentWillUnmount");
    };
  }, [count]);
  return (
    <div>
      <button onClick={() => setComp(!comp)}>mount/unmount</button>
      {comp ? (
        <>
          <button onClick={() => setCount(count - 1)}>-</button>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </>
      ) : null}
    </div>
  );
}
