import React, { useState } from 'react'

function Sarranosmanos() {
    const [resultado, setresultado] = useState ()

    function maquinadefumaça() {
        let criancas = Number(prompt("Quantas crianças pequenas tem por perto?"))
        let velocidade = Number(prompt("Qual a velocidade do vento?"))

        if (criancas = 0 || velocidade <= 0.5) {
            setresultado("Fumaça liberada. Que comecem os mistérios!")
        }
        else { setresultado("Fumaça bloqueada. Aguardar condições ideais.") }
    }
    return (
        <div className="sarrar">
            <h2>Show de Fumaça</h2>
            <button onClick={maquinadefumaça}>Sarranomano</button>
            {resultado}
        </div>
    )
}

export default Sarranosmanos