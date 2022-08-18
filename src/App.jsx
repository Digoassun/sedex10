import React, { useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import Forms from "./components/Forms/Forms";

function App() {
  const [req, setReq] = useState();

  return (
    <div className="App">
      <Forms setReq={setReq} />
      <Card
        cep={req ? req.cep : ""}
        logradouro={req ? req.logradouro : ""}
        complemento={req ? req.complemento : ""}
        bairro={req ? req.bairro : ""}
        localidade={req ? req.localidade : ""}
        uf={req ? req.uf : ""}
      />
    </div>
  );
}

export default App;
