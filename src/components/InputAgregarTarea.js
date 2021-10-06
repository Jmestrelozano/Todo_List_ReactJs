import React, { useEffect, useState } from "react";

export const InputAgregarTarea = ({
  cambiarEstadoTareas,
  Value,
  InputValue,
  agregarNuevaTarea,
}) => {

  const [defaultCheck, setDefaultCheck] = useState(JSON.parse(localStorage.getItem("defaultCheck"))|| false);
  const { tarea } = Value;
  const handleOnchange = ({ target }) => {
    InputValue({ ...Value, [target.name]: target.value });
  };

  useEffect(() => {
localStorage.setItem("defaultCheck",defaultCheck)
  }, [defaultCheck])
  return (
    <div className="input-tarea">
      <div style={{ marginRight: "2rem" }} className="form-group">
        <input
          checked={defaultCheck}
          onChange={() => {
           
            setDefaultCheck(!defaultCheck);
             cambiarEstadoTareas(defaultCheck);
          }}
          type="checkbox"
          id="todo-list"
        />
        <label htmlFor="todo-list"></label>
      </div>

      <form onSubmit={agregarNuevaTarea}>
        <input
          name="tarea"
          value={tarea}
          autoComplete="off"
          onChange={handleOnchange}
          className="input-text"
          placeholder="create a new todo..."
          type="text"
        />
      </form>
    </div>
  );
};
