import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fruits, setfruits] = useState([
    { id: "1", nom: "banane" },
    { id: "2", nom: "mangue" },
    { id: "3", nom: "fraise" }
  ]);
  const [newfruits, setnewfruits] = useState([]);

  function handlesubmit(evt) {
    evt.preventDefault();
    const updatefruit = [...fruits];
    const id = new Date().getTime();
    const nom = newfruits;
    updatefruit.push({ id: id, nom: nom });
    setfruits(updatefruit);
  }
  function handledelete(id) {
    const fruitscopy = [...fruits];
    const fruitscopyupdate = fruitscopy.filter((fruit) => fruit.id !== id);
    setfruits(fruitscopyupdate);
  }
  function handlechange(evt) {
    console.log(evt.target.value);
    setnewfruits(evt.target.value);
  }

  return (
    <div className="App">
      <h1>Apprendre react</h1>
      <h3>Listes des fruits</h3>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.id}>
            <li>
              {fruit.nom}
              <button className="del" onClick={() => handledelete(fruit.id)}>
                X
              </button>
            </li>
          </div>
        );
      })}
      <div>
        <form onSubmit={handlesubmit}>
          <br />
          <input
            type="text"
            placeholder="ajouter un fruit..."
            onChange={handlechange}
          />
          <button className="btn">Ajouter +</button>
        </form>
      </div>
    </div>
  );
}
