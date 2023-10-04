import { useState } from 'react'
import React from 'react';
import Inventario from './components/inventario/inventario';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Inventario/>
    </>
  )
}

export default App
