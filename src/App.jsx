
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { CartProvider } from './components/context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
 import { NotificationProvider } from './Notification/NotificationService' 

 function App() {
 

  return (
    <>
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Todos los Productos"}/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos por Categoría"}/>} />
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
              
            </Routes>
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </>
  )
} 


export default App
