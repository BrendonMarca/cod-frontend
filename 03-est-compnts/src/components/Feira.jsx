import React, { useState } from "react";

function Feira() {
  const [resultado, setresultado] = useState();

  function frutas() {
    let qtd = Number(prompt("Quantas maçãs vc quer?"));

    if (qtd < 12) {
      let total = qtd * 0.3;
      setresultado("O total é " + total.toFixed(2));
    } else {
      let total = qtd * 0.25;
      setresultado("O total é " + total.toFixed(2));
    }
  }

  return (
    <div className="feira">
      <h2>Olha a Banana!!!</h2>
      <button onClick={frutas}>Bora Comprar?</button>
      {resultado}
    </div>
  );
}

export default Feira;
