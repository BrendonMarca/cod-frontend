import React, { useState } from 'react'

function Magico() {
    const [resultado, setresultado] = useState()
    function palco() {


    }

    return (
        <div className="magicas">
            <h2>O maior Magico</h2>
            <button onClick={palco}>Magic</button>

        </div>
    )
}

export default Magico