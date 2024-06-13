import React from "react";

const SubInput = ({
  onChangeHandler,
}: {
  onChangeHandler: (text: string) => void;
}) => {
  return (
    <>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(e.target.value)
        }
      />
    </>
  );
};

export default SubInput;
