import React, { useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import Forms from "./components/Forms/Forms";
import Hist from "./components/Hist/Hist";

function App() {
  const [req, setReq] = useState();
  const [hist, setHist] = useState([])

  
  async function handleReq(e,cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    e.preventDefault();
    const response = await fetch(url);
    const json = await response.json();
    setReq(json)
    setHist([...hist,json])
  }
  console.log(hist)
  return (
    <div className="App">
      <Forms handleReq={handleReq} setReq={setReq} />
      <Card
        cep={req ? req.cep : ""}
        logradouro={req ? req.logradouro : ""}
        complemento={req ? req.complemento : ""}
        bairro={req ? req.bairro : ""}
        localidade={req ? req.localidade : ""}
        uf={req ? req.uf : ""}
      />
      <Hist hist={hist? [...hist]:""}/>
    </div>
  );
}

export default App;
