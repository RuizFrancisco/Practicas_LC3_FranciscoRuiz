import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");

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
    }
  };

  return (
    <div>
      <div>
        <h1>Ingrese su usuario</h1>
        <input type="text" value={userName} onChange={inputChangeHandler} />
        <button onClick={registerHandler}>Registrarse</button>
      </div>
      <div>{userName && <p>Usuario: {userName}</p>}</div>
    </div>
  );
};

export default Login;
