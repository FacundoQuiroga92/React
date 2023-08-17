import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Aquí encontrarás los mejores termo al mejor precio!"/>
    </>
  )
}

export default App
