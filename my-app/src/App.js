
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {

  const [banderas, setBanderas] = useState([]);
  const [bandera, setBandera] = useState([]);
  const [handleIniciar, setHandleInciar] = useState(false);
  const [banderaRandom, setBanderaRandom] = useState(null);
  const [input, setInput] = useState("");
  const respuesta="";

  const ListarBanderas = async() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((result) => {
        setBanderas(result.data.data);

      })
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const cargarBanderaRandom = () => {
  
    setHandleInciar(true);
    var random = [Math.floor(Math.random()*banderas.length)];
    setBanderaRandom(banderas[random]);
    }

  useEffect(() => {
    ListarBanderas()
  }, []);

  const verificar = () => {
    
    if (input == banderaRandom.name){
      setInput("");
      cargarBanderaRandom();
    }
  }
  
  

  return (
    <>
    {!handleIniciar && (
      <div>
        <button onClick={() => cargarBanderaRandom()}>Iniciar Juego</button>
      </div>
    )}
    {handleIniciar && (
      <div className='container'>
        <p>{banderaRandom.name}</p>
         <img src={banderaRandom.flag} alt="" />
         <input value={input} onChange={handleChange}></input><button className='btn btn-primary' onClick={() => verificar()}>Ok</button><button className='btn btn-danger ' onClick={() => cargarBanderaRandom()}>Saltar</button>
      </div>
    )}

    
    
   
    </>
  );
}

export default App;
