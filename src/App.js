import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Checkout from './pages/checkout/checkout';
import Cart from './pages/Cart/Cart';
import { LoginButton } from './components/login/login';
import { LogoutButton } from './components/login/logout';
import { Profile } from './components/login/profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      <NavBar/>
      {isAuthenticated ? (
      <>
      <LogoutButton className="login"/>
      <Profile className="login"/>
      </>)
      : (<LoginButton className="login"/>
      )}
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
      
    </div>
  );
}

export default App;
