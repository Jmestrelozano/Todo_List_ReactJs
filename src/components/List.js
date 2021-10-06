import React from "react";

export const List = ({ cambiarEstado, eliminarTarea, info }) => {
  return (
    
    <li
    
      style={{
        borderBottom: "1px solid",
        borderBottomColor: "#4d5066",
      }}
      className="input-tarea"
    >
      <div style={{ marginRight: "2rem" }} className="form-group">
        <input
          onChange={() => cambiarEstado(info.Id)}
          checked={info.estado}
          type="checkbox"
          id={info.Id}
        />
        <label htmlFor={info.Id}></label>
      </div>

      <p className="input-text">{info.Tarea}</p>
      <i
        onClick={() => eliminarTarea(info.Id)}
        style={{ fontSize: "1.5rem", color: "#4d5066" }}
        className="fas fa-times"
      ></i>
    </li>
  );
};
