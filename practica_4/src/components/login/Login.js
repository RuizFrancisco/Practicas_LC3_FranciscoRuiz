import React, { useState } from "react";
import "./Login.css";
import TaskList from "../taskList/TaskList";
import TaskAdd from "../taskAdd/TaskAdd";

const Login = ({ prevTasks, sessionButtonHandler, setPrevTask }) => {
  const [userName, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const inputChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const registerHandler = () => {
    if (userName.trim() === "") {
      alert("Usuario inválido para registrarse");
    } else if (userName.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    } else {
      alert("¡Usuario registrado correctamente!");
      setShowLogin(false);
    }
  };

  const singOffHandler = () => {
    setShowLogin(true);
    setUserName("");
  };

  return (
    <div>
      {showLogin && (
        <div>
          <h1>Ingrese su usuario</h1>
          <input type="text" value={userName} onChange={inputChangeHandler} />
          <button onClick={registerHandler}>Iniciar sesión</button>
          {userName && <p>Usuario: {userName}</p>}
        </div>
      )}

      {!showLogin && (
        <div>
          <button onClick={singOffHandler}>Cerrar sesión</button>
          <br />
          <TaskAdd prevTasks={prevTasks} setPrevTask={setPrevTask} />
          <TaskList prevTasks={prevTasks} setPrevTask={setPrevTask} />
        </div>
      )}
    </div>
  );
};

export default Login;
