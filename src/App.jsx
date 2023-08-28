import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem";
import './App.scss';

function App() {

  const [todoList, setToDoList] = useState([
    // nanoid : (installation : npm i nanoid) => permet de générer un id unique, ici on génère un id unique pour chaque tâche - entre les parenthèses de la méthode, on peut définir le nombre de caractères de l'id

  ])

  const [todo, setTodo] = useState("");

  // le showValidation ci dessous permet de faire en sorte que si input vide alors la validation ne se fera pas (n'affichera pas une tâche vide)
  const [showValidation, setShowValidation] = useState(false);

  function deleteTodo(id) {
    setToDoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(todo === ""){
      setShowValidation(true)
      return
    }
    setToDoList([...todoList, {id: nanoid(), content : todo}])
    setTodo("");
    setShowValidation(false)
  }
  return (

    <div className="todo-list">
      <div className="container">
        <h1>To-do list</h1>

        <form
        onSubmit={handleSubmit}
        action="" className="add-to-dos">
          <input
          value={todo} 
          onChange={e => setTodo(e.target.value)}
          type="text" placeholder="Ajouter une tâche" />
          {showValidation && (
            <p>Ajouter d'abord du contenu à votre tâche</p>
          )}
          <button className="add-to-do">Ajouter</button>
        </form>

        <ul>
          {todoList.length === 0 && (
            <li>Pas de tâches à afficher</li>
          )}
          {todoList.length > 0 && todoList.map(item => (
 <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}
           </ul>
      </div>
    </div>

  )
}

export default App
