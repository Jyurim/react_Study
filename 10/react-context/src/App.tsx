import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { CountProvider } from "./context/CountContext";

function App() {
  return (
    <>
      <CountProvider>
        <Navbar />
        <Home />
      </CountProvider>
    </>
  );
}

export default App;
