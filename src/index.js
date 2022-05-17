import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';
import { initializeApp } from "firebase/app";

// const root = document.getElementById('root')

// const ReactRoot = ReactDOM.createRoot(root)

// ReactRoot.render(<App />)
const firebaseConfig = {
  apiKey: "AIzaSyARMI61_M4eCmiuPqfjjQl1c5bLKLwP_as",
  authDomain: "cripto-hans-huanca.firebaseapp.com",
  projectId: "cripto-hans-huanca",
  storageBucket: "cripto-hans-huanca.appspot.com",
  messagingSenderId: "296958448343",
  appId: "1:296958448343:web:92c98c72f716e699b85692"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

