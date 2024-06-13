import React from "react";

function Display({ count }: { count: number }) {
  console.log("Display component rendered");
  return <h1>Count: {count}</h1>;
}

export default React.memo(Display);
