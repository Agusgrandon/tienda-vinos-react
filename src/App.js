import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './index.css';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
  );
}

export default App;
