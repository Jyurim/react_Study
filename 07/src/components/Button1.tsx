// import { useState } from "react";
// import styles from "./Button.module.css";
import styled from "styled-components";

const CustomButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const Button = () => {
  //   const login = true;
  //   const [login, setLogin] = useState(true);
  //   function handleClick() {
  //     setLogin(!login);
  //   }
  return (
    <>
      <CustomButton>Login</CustomButton>
      {/* <button
        className={`
                bg-[#4caf50] 
                text-white 
                py-[15px] px-[32px] 
                text-center 
                no-underline inline-block 
                text-[16px] 
                my-[4px] mx-[2px] 
                cursor-pointer
                inter
        `}
      >
        Login
      </button> */}
    </>
  );
};

export default Button;
