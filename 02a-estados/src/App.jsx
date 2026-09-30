import { useState } from 'react'
import './App.css'

function App() {
  const [saida,setsaida] = useState(0)

function calcularMedia(){
  let n1 =Number(prompt("Nota 1:"))
  let n2 =Number(prompt("Nota 2:"))
  let media = (n1 +n2) / 2
  setsaida(media)
 }
function rolarD6(){
  let n = Math.ceil(Math.random()*6)
  setsaida (n)
}
function rolarD8(){
  let n = Math.ceil(Math.random()*8)
  setsaida (n)
}
function rolarD12(){
  let n = Math.ceil(Math.random()*12)
  setsaida (n)
}
function rolarD20(){
  let n = Math.ceil(Math.random()*20)
  setsaida (n)
}
function rolarD67(){
  let n = Math.ceil(Math.random()*67)
  setsaida (n)
}
function rolarD100(){
  let n = Math.ceil(Math.random()*100)
  setsaida (n)
}
function calculadecisão(){
  let senha = Number(prompt("qual a senha?"))
   if(senha == 67)  
  setsaida ('Acesso Permitido')
}else{'Sai dai Pilantra'}
  return (
 <div className="app">
  <h1>Estados!</h1>
  <button onClick={calcularMedia}>Media</button>
  <button onClick={rolarD6}>D6</button>
  <button onClick={rolarD8}>D8</button>
  <button onClick={rolarD12}>D12</button>
  <button onClick={rolarD20}>D20</button>
  <button onClick={rolarD67}>D67</button>
  <button onClick={rolarD100}>D100</button>
  <button onClick={calculadecisão}>decisão</button>
<p> 
  Resultado: {saida}
</p>

 </div>

  )
}

export default App
