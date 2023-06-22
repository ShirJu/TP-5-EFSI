import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from Axios;

function App() {
  axios
  .get("https://countriesnow.space/api/v0.1/countries/flag/images")
  .then((result) => {
    console.log(result.data.results[0]);
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <div className="App">
      <header className="App-header">
     

      </header>
    </div>
  );
}

export default App;
