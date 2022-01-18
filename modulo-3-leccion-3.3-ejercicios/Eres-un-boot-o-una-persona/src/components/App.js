import "../styles/App.css";
import { useState } from "react";

function App() {
  const [check, setCheck] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (eve) => {
    const inputName = eve.currentTarget.name;
      if(inputName === "cebolla" && inputName === "patatas" &&inputName === "huevo"){
        setCheck(eve.currentTarget.name);
      }
     
  };

  return (
    <div className="title">
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="macarrones">Macarrones</label>
        <input type="checkbox" name="macarrones" id="macarrones" onChange={handleChange}/>

        <label htmlFor="patatas">Patatas</label>
        <input type="checkbox" name="patatas" id="patatas" onChange={handleChange}/>

        <label htmlFor="nueces">Nueces</label>
        <input type="checkbox" name="nueces" id="nueces" onChange={handleChange}/>

        <label htmlFor="huevos">Huevos</label>
        <input type="checkbox" name="huevos" id="huevos" onChange={handleChange}/>

        <label htmlFor="cebolla">Cebolla</label>
        <input type="checkbox" name="cebolla" id="cebolla" onChange={handleChange}/>

        <label htmlFor="cerveza">Cerveza</label>
        <input
          type="checkbox"
          name="cerveza"
          id="cerveza"
          onChange={handleChange}
        />
      </form>
      <p>{check ? "Eres concebollista" : "Eres un robot sin paladar"}</p>
    </div>
  );
}

export default App;
