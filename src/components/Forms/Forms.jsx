import React, { useState } from "react";

const Forms = ({setReq}) => {
  const [cep, setCep] = useState("");

  const handleCep = (e) => {
    setCep(e.target.value);
  };

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  async function handleReq(e) {
    e.preventDefault();
    const response = await fetch(url);
    const json = await response.json();
    setReq(json);
  }

  return (
    <div>
      <input onChange={handleCep} type="text" value={cep}></input>
      <button onClick={handleReq}>Enviar</button>
    </div>
  );
};

export default Forms;
