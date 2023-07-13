
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';


function App() {

  const [banderas, setBanderas] = useState([]);
  const [bandera, setBandera] = useState([]);
  const [handleIniciar, setHandleInciar] = useState(false);
  const [banderaRandom, setBanderaRandom] = useState(null);
  const [puntos, Setpuntos] = useState(0);
  const [input, setInput] = useState("");
  const respuesta = "";

  const ListarBanderas = async () => {
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
    var random = [Math.floor(Math.random() * banderas.length)];
    setBanderaRandom(banderas[random]);
  }

  useEffect(() => {
    ListarBanderas()
  }, []);

  const verificar = () => {

    if (input != null || input != undefined) {

      if (input.toLowerCase() == banderaRandom.name.toLowerCase()) {

        Setpuntos(puntos + 10);
        setInput("");

        console.log(puntos);
        cargarBanderaRandom();
      }
      else {
        
        Setpuntos(puntos - 1);
        setInput("");

        console.log(puntos);
        cargarBanderaRandom();
      }
    }
    else{

      alert("Ingrese un pais por favor");
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
          <center><h1>Puntos {puntos}</h1> </center>
          <p>{banderaRandom.name}</p>
          <center><img src={banderaRandom.flag} alt="" className='Foto'/></center>
          <br></br>
          <center><input value={input} onChange={handleChange} required></input></center>
          <br></br>
          <center><button className='btn btn-primary botonOk ' onClick={() => verificar()}>Ok</button></center>
        <button className='btn btn-danger boton' onClick={() => cargarBanderaRandom()}>Saltar</button>
        
        </div> 
        
      )}
    </>
  );
}

export default App;
