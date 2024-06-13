import axios from "axios";
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

function _App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchDataAsync = async () => {
    try {
      const data = await (await fetch("http://localhost:4000/todo")).json();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = () => {
    alert("Fetch API");
    fetch("http://localhost:4000/todo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const fetchAdd = async () => {
    const response = await fetch("http://localhost:4000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 등록할 떄 사용할 데이터를 json 형태라고 알림
      },
      body: JSON.stringify({ text: "Learn React" }), // 등록할 데이터를 json 형태로 변환
    });

    if (response.ok) {
      alert("데이터가 추가되었습니다.");
    }
  };
  const fetchToggle = async () => {
    const response = await fetch(
      "http://localhost:4000/todo/5e692b94-84e3-41c1-a2aa-45c54ff24256",
      {
        method: "PATCH",
      }
    );
    if (response.ok) {
      alert("데이터가 수정되었습니다.");
    }
  };
  const fetchDelete = async () => {
    await fetch(
      "http://localhost:4000/todo/c487e112-7708-4280-8c59-0244370b5928",
      {
        method: "DELETE",
      }
    );
  };
  const axiosGet = () => {
    axios
      .get("http://localhost:4000/todo")
      .then(function (response) {
        // handle success
        setTodos(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const axiosAsyncGet = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todo");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const axiosPost = async () => {
    // await axios.post("http://localhost:4000/todo", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     text: "Learn Axios",
    //   },
    // });
    await axios.post(
      "http://localhost:4000/todo",
      {
        text: "Learn Axios",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const axiosPatch = async () => {
    await axios.patch(
      "http://localhost:4000/todo/80b5efd0-45cc-471e-bb78-cc52ce58fb56"
    );
  };
  const axiosDelete = async () => {
    await axios.delete(
      "http://localhost:4000/todo/80b5efd0-45cc-471e-bb78-cc52ce58fb56"
    );
  };
  return (
    <>
      <h1>_App Component</h1>
      <button onClick={fetchData}>Fetch API</button>
      <button onClick={fetchDataAsync}>Fetch API Async</button>
      <button onClick={fetchAdd}>Fetch Add</button>
      <button onClick={fetchToggle}>Fetch Toggle</button>
      <button onClick={fetchDelete}>Fetch Delete</button>
      <br />
      <button onClick={axiosGet}>Axios Get</button>
      <button onClick={axiosAsyncGet}>Axios Async Get</button>
      <button onClick={axiosPost}>Axios Post</button>
      <button onClick={axiosPatch}>Axios Patch</button>
      <button onClick={axiosDelete}>Axios Delete</button>
      <br />
      {/* {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.done} />
          <span>{todo.text}</span>
        </div>
      ))} */}
      <div>{JSON.stringify(todos)}</div>
    </>
  );
}

export default _App;
