import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Pantalones from './pages/Pantalones';
import Remeras from './pages/Remeras';
import Camisas from './pages/Camisas';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path= '/' element={<Home />}/>
          <Route path= 'categoria/pantalones' element={<Pantalones />}/>
          <Route path= 'categoria/remeras' element={<Remeras />}/>
          <Route path= 'categoria/camisas' element={<Camisas />}/>
          <Route path='categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
