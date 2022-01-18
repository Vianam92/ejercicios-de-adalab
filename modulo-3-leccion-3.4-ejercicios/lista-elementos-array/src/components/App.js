import "../styles/App.css";
import { useState } from "react";

function App() {
  /*const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio'
  ];

  const renderList = () =>{
    return tasks.map((list,index) => {
      return (
    <li key={index}>
      <strong>{list}</strong></li>
      );
    });
  };*/

  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true, id: "1" },
    { task: "Ir a la puerta de un gimnasio", completed: false, id: "2" },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
      id: "3",
    },
  ]);

  const handleClick = (eve) => {
    const clickIdTasks = eve.currentTarget.id;
    const foundList = tasks.find((task) => task.id === clickIdTasks);
    foundList.completed = !foundList.completed;
    setTasks([...tasks]);
  };

  const renderList = () => {
    return tasks.map((list, index) => {
      return (
        <li
          key={index}
          id={list.id}
          className={`${list.completed ? "complete" : ""}`}
          onClick={handleClick}
        >
          <strong>{list.task}</strong>
        </li>
      );
    });
  };

  return (
    <div className="title">
      <h1>Lista</h1>
      <ol>{renderList()}</ol>
    </div>
  );
}

export default App;
