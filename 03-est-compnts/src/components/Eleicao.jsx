import React, { useState } from "react";

function Eleição() {
  const [resultado, setresultado] = useState();

  function votos() {
    let idade = Number(prompt("Qual a sua idade?"));
    if (idade < 16) {
      setresultado("Sai dai pia");
    } else if (idade <= 17) {
      setresultado("Capricha no voto!");
    } else if (idade >= 18 && idade <= 65) {
      setresultado("Vota certo seu estepo");
    } else {
      setresultado("Ta fazendo oq aqui?");
    }
  }
  return (
    <div className="Eleição">
      <h2>Eleição do PT</h2>
      <button onClick={votos}>PT</button>
      {resultado}
    </div>
  );
}

export default Eleição;
