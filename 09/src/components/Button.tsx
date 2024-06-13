import React from "react";

const Button = ({ onClickhandler }: { onClickhandler: () => void }) => {
  console.log("Button component rendered");
  return <button onClick={onClickhandler}>Click</button>;
};

export default React.memo(Button);
