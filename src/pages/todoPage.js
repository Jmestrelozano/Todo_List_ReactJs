import React, { useEffect, useState } from "react";
import { DarkLightMode } from "../components/DarkLightMode";
import { FiltersTodo } from "../components/FiltersTodo";
import { Header } from "../components/Header";
import { InputAgregarTarea } from "../components/InputAgregarTarea";
import uniqid from "uniqid";
import { List } from "../components/List";
import { ReactSortable } from "react-sortablejs";
let obtenerStorage = JSON.parse(localStorage.getItem("Tareas")) || [];
const TodoPage = () => {
  let [tareas, setObtenerTareas] = useState(obtenerStorage);
  const [filtroTareas, setFiltroTareas] = useState(obtenerStorage);

  const [Value, InputValue] = useState({
    tarea: "",
  });
  const { tarea } = Value;

  const agregarNuevaTarea = (e) => {
    e.preventDefault();

    setObtenerTareas((tareas) => [
      ...tareas,
      { Id: uniqid(), Tarea: tarea, estado: false },
    ]);

    InputValue({ tarea: "" });
  };

  const eliminarTarea = (id) => {
    const filterIdTareas = tareas.filter((tarea) => tarea.Id !== id);

    setObtenerTareas(filterIdTareas);
  };

  const cambiarEstado = (id) => {
    const indiceElemento = tareas.findIndex((el) => el.Id === id);
    let newTodos = [...tareas];
    tareas.forEach((tarea) => {
      if (tarea.Id === id) {
        if (tarea.estado === true) {
          newTodos[indiceElemento] = {
            ...newTodos[indiceElemento],
            estado: false,
          };
          tareas = newTodos;

          setObtenerTareas(tareas);
        } else {
          newTodos[indiceElemento] = {
            ...newTodos[indiceElemento],
            estado: true,
          };
          tareas = newTodos;

          setObtenerTareas(tareas);
        }
      }
    });
  };

  const cambiarEstadoTareas = (defaultCheck) => {
    let estado = true;
    const filtroTareasEstadoEnTrue = tareas.filter((tarea) => {
      if (!defaultCheck) {
        tarea.estado = estado;
        return tareas;
      } else {
        tarea.estado = !estado;
        return tareas;
      }
    });
    setObtenerTareas(filtroTareasEstadoEnTrue);
  };

  useEffect(() => {
    localStorage.setItem("Tareas", JSON.stringify(tareas));

    setFiltroTareas(tareas);
  }, [tareas]);

  return (
    <div>
      <Header />
      <div className="contenedor">
        <div className="todo-banner">
          <h1>Todo</h1>
          <DarkLightMode />
        </div>
        <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
          <InputAgregarTarea
            cambiarEstadoTareas={cambiarEstadoTareas}
            Value={Value}
            InputValue={InputValue}
            agregarNuevaTarea={agregarNuevaTarea}
          />
        </div>

        <ul className="list-todo">
          <ReactSortable
            animation={200}
            list={filtroTareas}
            setList={setFiltroTareas}
          >
            {filtroTareas.map((info, index) => {
              return (
                <List
                  key={index}
                  eliminarTarea={eliminarTarea}
                  cambiarEstado={cambiarEstado}
                  info={info}
                  index={index}
                  filtroTareas={filtroTareas}
                  setFiltroTareas={setFiltroTareas}
                />
              );
            })}
          </ReactSortable>
        </ul>

        <div>
          <FiltersTodo
            tareas={tareas}
            setFiltroTareas={setFiltroTareas}
            setObtenerTareas={setObtenerTareas}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
