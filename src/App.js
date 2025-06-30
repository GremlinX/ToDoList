import Navbar from "./modulos/NavBar/navbar";
import Tarefa from "./modulos/Tarefas/tarefa";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <todo-list>
      <Navbar/>
      <Tarefa/>
    </todo-list>
  );
}

export default App;
