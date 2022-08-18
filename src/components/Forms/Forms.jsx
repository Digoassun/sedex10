import React from 'react'

const Forms = ({value}) => {
  return (
    <div>
        <input type="text" value={value}></input>
        <button>Enviar</button>
    </div>
  )
}

export default Forms