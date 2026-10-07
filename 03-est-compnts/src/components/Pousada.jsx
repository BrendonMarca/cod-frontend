import React, { useState } from "react";

function Pousada() {
  const [Total, setTotal] = useState();

  function calcularpousada() {
    let dias = Number(prompt("Quantos dias você vai passar?"));
    let valordiaria;
    if (dias <= 5) {
      valordiaria = 100
    } else if (dias <= 10) {
      valordiaria = 90
    } else {
      valordiaria = 80
    }
    let tb = dias * valordiaria;
    let disconto = tb * 25/100;
    let multa = 150;
    let total = tb - disconto + multa;

    setTotal("O valor a se pagar é:" + total);
  }
  return (
    <div className="Pousada">
      <h2>Pousada, Oba!!</h2>
      <button onClick={calcularpousada}>Pro cara burrão</button>
      {Total}
    </div>
  );
}

export default Pousada;
