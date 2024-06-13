import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    console.log("useEffect from Navbar");
  }, []);
  return (
    <nav>
      <h1>Navbar</h1>
    </nav>
  );
};

export default Navbar;
