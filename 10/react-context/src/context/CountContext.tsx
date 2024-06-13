import { createContext, useState } from "react";

type CountContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

// export const CountContext = createContext<CountContextType | null>(null);
export const CountContext = createContext<CountContextType>({
  count: 0,
  setCount: () => {},
});

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
