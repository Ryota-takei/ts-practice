import axios from "axios";
import { useState } from "react";
import { Text } from "./Text";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { UserProfile } from "./UserProfile ";

const user = {
  name: "リョウタ",
  // hobbies: ["映画", "game"]
}



export const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onclickFetchData = () => {
    axios.get<TodoType[]>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <UserProfile  user={user} />
      <button onClick={onclickFetchData}>データ取得</button>
      {todos.map((todo ,index) => (
        <Todo completed={todo.completed} key={index} title={todo.title} userId={todo.userId}/>
      ))}
      <Text color="red" fontSize="18px">ほげーーーー</Text>
    </div>
  );
};
