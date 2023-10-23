import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";

const TASKS = [
  { taskName: "Hacer practica 4 LC3", completed: false },
  { taskName: "Pagar cuota", completed: false },
];

function App() {
  const [session, setSession] = useState(true);
  const [prevTasks, setPrevTask] = useState(TASKS);

  const sessionButtonHandler = () => {
    !session ? setSession(true) : setSession(false);
  };

  return (
    <div className="App">
      {session && (
        <Login
          prevTasks={prevTasks}
          sessionButtonHandler={sessionButtonHandler}
          setPrevTask={setPrevTask}
        />
      )}
    </div>
  );
}

export default App;
