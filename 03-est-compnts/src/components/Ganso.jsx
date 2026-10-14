import React, { useState } from 'react'

function Ganso() {
    const [resultado, setresultado] = useState()
    function Tripulação() {
        let marujos = Number(prompt("Quantos Marujos capitao??"))
        let comida = Number(prompt("Quantos kg de Comidas Capitão??"))
        let comidapormarujo = comida / marujos

        if (marujos >= 10 && comidapormarujo >= 1.5) {
            setresultado("Provisões suficientes. Rumo ao horizonte!")
        }
        else { setresultado("Algo está errado. Posseidom não quer ninguém no mar hoje.") }
    }
    return (
        <div className="ganso">
            <h2>Ganso</h2>
            <button onClick={Tripulação}>Bora Zarpar</button>
            {resultado}
        </div>
    )
}

export default Ganso