import React from "react";

export const FiltersTodo = ({ tareas, setFiltroTareas, setObtenerTareas }) => {
  const seleccionarFiltro = (e) => {
    switch (e.target.textContent) {
      case "All":
        setFiltroTareas([...tareas]);
        break;
      case "Active":
        const tareasSinCompletar = tareas.filter(
          (tarea) => tarea.estado === false
        );
        if (tareasSinCompletar.length > 0) {
          setFiltroTareas(tareasSinCompletar);
        } else {
          setFiltroTareas([]);
        }

        break;
      case "Completed":
        const tareasCompletadas = tareas.filter(
          (tarea) => tarea.estado === true
        );
        if (tareasCompletadas.length > 0) {
          setFiltroTareas(tareasCompletadas);
        } else {
          setFiltroTareas([]);
        }
        break;

      default:
        break;
    }
  };

  const eliminarTodasLasTareas=()=>{
    localStorage.setItem("Tareas", []);
    setObtenerTareas([]);
  }

  return (
    <div className="filter-todo">
      <ul>
        <li>{tareas.length} item left</li>

        <div className="filtros" onClick={seleccionarFiltro}>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </div>
        <li
          onClick={eliminarTodasLasTareas}
        >
          Clear Completed
        </li>
      </ul>
    </div>
  );
};
