import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";

interface Todotype {
  "userId": number;
  "id": number;
  "title": string;
  "completed": boolean;
}

export const App = () => {
  const [todos, setTodos] = useState<Todotype[]>([]);
  const onclickFetchData = () => {
    axios.get<Todotype[]>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onclickFetchData}>データ取得</button>
      {todos.map((todo ,index) => (
        <Todo key={index} title={todo.title} userID={todo.userId}/>
      ))}
    </div>
  );
};
