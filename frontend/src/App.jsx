import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CreateNewCategory } from './components/Buttons/CreateNewCategory';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <CreateNewCategory />
    </>
  );
}

export default App;
