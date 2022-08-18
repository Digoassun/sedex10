import React,{useState} from 'react'

import "./App.css";
import Card from "./components/Card/Card";
import Forms from "./components/Forms/Forms";

function App() {

  const [req, setReq] = useState()

  return (
    <div className="App">
      <Forms/>
      <Card/>
    </div>
  );
}

export default App;
