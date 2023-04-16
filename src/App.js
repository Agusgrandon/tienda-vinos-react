import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './index.css';

function App() {
  return (
      <>
      <NavBar/>
      <ItemListContainer greeting={"Todos los productos"}/>
      <ItemDetailContainer/>
      <Footer/>
      </>
  );
}

export default App;
