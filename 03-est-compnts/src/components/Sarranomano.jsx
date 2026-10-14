import React, { useState } from 'react'

function Sarranomano() {
    const [resultado, setresultado] = useState ()

    function deslocamento() {
        let gripe = prompt("Esta gripado?")
        let tempo = Number(prompt("Quanto tempo leva?"))

        if(gripe === "nao" && tempo <= 45 ){
            setresultado("Viagem autorizada. Rumo ao show!")
        }
           else{setresultado("Deslocamento inviável. Melhor recusar este evento.")}
}
    return (
        <div className="mago">
            <h2>Eventos</h2>
            <button onClick = {deslocamento} >Ta gripado?</button>
            {resultado}
        </div>
    )
}

export default Sarranomano