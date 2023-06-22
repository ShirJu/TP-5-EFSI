
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {

  const [banderas, setBanderas] = useState([]);
  const [bandera, setBandera] = useState([]);

  const ListarBanderas = () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((result) => {
        const banderas = result.data.data;
        setBanderas(banderas);

        var item = banderas[Math.floor(Math.random()*banderas.length)];
        setBandera(item);
      })
  }

  useEffect(() => {
    ListarBanderas()
  }, []);


  return (
    <>
    <p>{bandera.name}</p>
    <img src={bandera.flag} alt=" " />
    </>
  );
}

export default App;
