import "./App.css"
import { Search } from "./components/Search"

function App() {
  return (
    <div className='App'>
      <h1>Bucando repositórios</h1>
      <p>Digite o nome do usuário/repositório que deseja buscar</p>
      <p>Ex: facebook/react</p>
      <Search />
    </div>
  )
}

export default App
