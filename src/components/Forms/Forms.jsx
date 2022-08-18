import React, { useState } from "react";

const Forms = ({setReq, handleReq }) => {
  const [cep, setCep] = useState("");
  

  const handleCep = (e) => {
    setCep(e.target.value);
  };

  return (
    <div>
      <input onChange={handleCep} type="text" value={cep}></input>
      <button onClick={(e)=>handleReq(e,cep)}>Enviar</button>
    </div>
  );
};

export default Forms;
