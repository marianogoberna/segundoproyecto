import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={'/shop'} element={<ItemList/>}/>
          <Route path={'/shop/item/:id'} element={<ItemDetail/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
