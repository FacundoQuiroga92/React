import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'


 function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Todos los Productos"}/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos por Categoría"}/>} />
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
} 

/* const App = () =>{
  return(
    <ItemListContainer greeting={'Aquí encontrarás los mejores termo al mejor precio!'} />
  )
} */
export default App
