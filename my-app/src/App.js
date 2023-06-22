
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Respuesta from './Respuesta.js'; 

function App() {

  const [banderas, setBanderas] = useState([]);
  const [bandera, setBandera] = useState([]);
  const respuesta="";

  const ListarBanderas = () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((result) => {
        const banderas = result.data.data;
        setBanderas(banderas);

        const siguienteBandera = () => {
        var item = banderas[Math.floor(Math.random()*banderas.length)];
        setBandera(item);
        }
        
       
      })
  }

  useEffect(() => {
    ListarBanderas()
  }, []);

 
  
  

  return (
    <>
    <p>{bandera.name}</p>
    <img src={bandera.flag} alt=" " />
    <Respuesta NombreBandera={bandera.name}/>
    <button onClick={siguienteBandera()} class="btn btn-success"> Siguiente Bandera</button>
    </>
  );
}

export default App;
