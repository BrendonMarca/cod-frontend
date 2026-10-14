import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Eleicao from "./components/Eleicao";
import Altura from "./components/Altura";
import Feira from "./components/Feira";
import Ganso from "./components/Ganso";
import Sarranosmanos from "./components/Sarranosmanos";
import Recrutas from "./components/Recrutas";
import Sarranomano from "./components/Sarranomano";
import Magico from "./components/Magico";

function App() {
  return (
    <div className="app">
      <h1>Estados e Componentes</h1>

      <h2>#H0030</h2>
      <Ganso />
      <Recrutas />
      <Sarranosmanos />
      <Sarranomano />
      <Magico />

      <hr />
      <h2>#H0027.se05</h2>
      <Jogo />
      <Pousada />
      <Eleicao />
      <Altura />
      <Feira />
    </div>
  );
}

export default App;
