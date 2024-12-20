import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx';
import { CreateNewCategory } from './components/Buttons/CreateNewCategory.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <CreateNewCategory />
      <App />
    </BrowserRouter>
  </StrictMode>
);
