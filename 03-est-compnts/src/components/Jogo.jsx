import React, { useState } from "react";

function Jogo() {
  const [resultado, setresultado] = useState();

  function Classificar() {
    let pontos = Number(prompt("Quantos pontos?"));
    if (pontos <= 10) {
      setresultado("Mogou o betinha");
    } else if (pontos <= 100) {
      setresultado("Supimpa!!");
    } else if (pontos <= 200) {
      setresultado("Boa Betinha, tu Conseguiu");
    } else {
      setresultado("Farmou muita aura");
    }
  }
  return (
    <div className="Jogo">
      <h2>Jogo do Mano Juca</h2>
      <button onClick={Classificar}>Classificar</button>
      {resultado}
    </div>
  );
}

export default Jogo;
