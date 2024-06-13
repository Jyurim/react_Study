// import Button from "./components/Button2";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      {/* <Button type="submit" disabled={true} name="login" msg="Log in" />
      <Button type="submit" disabled={false} msg="Log out" /> */}
      {/* <Button type="submit" disabled={true} name="login">
        Log in
      </Button> */}

      <Signup />
      <TodoList />
    </div>
  );
}

export default App;
