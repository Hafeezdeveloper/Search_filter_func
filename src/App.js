import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './confrig/Home';
import About from './confrig/About';
import Contact from './confrig/Contact';
import Navbar from './confrig/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'about'} element={<About />}/>
      <Route path={'contact'} element={<Contact />}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
