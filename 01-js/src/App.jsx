
import { useState } from 'react'
import './App.css'

function App() {
  const[resultado, setResultado] = useState(0)

  function trocarSapatos(){
    let qtdPares, precoPar, valorTotal
    qtdPares = Number(prompt('Quantidade de pares:'))
    precoPar = Number(prompt('Preço de cada par:'))

    valorTotal = qtdPares * precoPar

    alert('Valor total da troca: R$' + valorTotal.toFixed(2))
  }

  function calcularPontos(){
    let vitorias = Number(prompt('Número de vitórias:'))
    let empates = Number(prompt('Número de empates:'))

    let pontos = vitorias*3 + empates //*1

    alert('O time teu tem ' + pontos + ' pontos')
  }

  function testar(){
    let nome = prompt('Qual seu nome?')
    let bocaDoSapo = nome
    alert(nome + ', seu nome tá na bocaDoSapo 🐸💀')
  }

  function calcularMedia(){
    let nota1 = Number(prompt('Manda a primeira nota:'))
    let nota2 = Number(prompt('Manda a segunda nota:'))

    let media = (nota1+nota2) / 2
    alert('Sua média: ' + media)
  }
 function calcularDobro(){
  let n1 = Number(prompt("digite um numero"))
  let dobro = n1 * 2
  setResultado (dobro)

 }

  return (
    <div className="cont-app">
      <h1>Javascript no React</h1>


<hr />
<h2>Usando estados</h2>
<button onClick={calcularDobro}>Estados - Dobro</button>

<p>
  Resultado a operação : {resultado}
</p>

<hr />


      <h2>Exercicios supimpas</h2>

      <button onClick={calcularPontos}>Campeonato</button>
      <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
      {/* <button>
        <img src="" alt="" />
      </button> */}

      <hr />


      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
    </div>
  )
}

export default App


  // gasto -- 100
  // faturamwnto -- lucro

  // gasto*lucro = fat*100

  // lucro = (fat*100)/gasto