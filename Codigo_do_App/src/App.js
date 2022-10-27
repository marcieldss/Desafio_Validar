import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('João');
  const [idade, setIdade] = useState();
  const [resultado, setResultado] = useState(0);
  const [validar, setValidar] = useState();
  <p></p>
  const calcular = () => {

    if (idade >= 18) {
      return (`${nome} Tem ${idade} anos! está apto para votar!`);
    } else if ((idade > 0)) {
      return (`${nome} Tem ${idade} anos! não tem idade para votar!`);

    };
  }

  useEffect(() => {
    setResultado(calcular());
  }, [validar, nome]);

  return (
    <div className='App'>
      <h1>Desafio de Votação</h1>

      <label>Nome:</label>
      <input className='nome' id="nome"
        type="text"
        value={nome} onChange={(e) => setNome(e.target.value)} />
      <br></br>
      <label>Idade:</label>
      <input className='idade' id="idade"
        type="number" placeholder='Idade'
        value={idade} onChange={(e) => setIdade(e.target.value)} />
      <button className='calcular' id="calcular" type="submit" onClick={setValidar}> Validar </button>
      <br></br>
      <br></br>
      <label className="resultado" id="resultado">{resultado}</label>

    </div>
  );
}

export default App;
