import { useCallback, useState } from "react";
import SubInput from "../SubInput";

const userInitialized = ["Jack", "Jane", "Tom", "Alice", "John", "Jenny"];
const Search = () => {
  const [user, setUser] = useState(userInitialized);
  const onChangeHandler = useCallback((text: string) => {
    const filterUser = user.filter((item) => item.includes(text));
    setUser(filterUser);
  }, []);

  const shuffle = () => {
    setUser((user) => [...user].sort(() => Math.random() - 0.5));
  };
  return (
    <>
      <h1>App Component</h1>
      <SubInput onChangeHandler={onChangeHandler} />
      <button onClick={shuffle}>shuffle</button>
      <ul>
        {user.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default Search;
