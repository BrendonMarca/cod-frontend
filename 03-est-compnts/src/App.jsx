import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Eleicao from "./components/Eleicao";
import Altura from "./components/Altura";
import Feira from "./components/Feira";

function App() {
  return (
    <div className="app">
      <h1>Estados e Componentes</h1>
      <Jogo />
      <Pousada />
      <Eleicao />
      <Altura />
      <Feira />
    </div>
  );
}

export default App;
