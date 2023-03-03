import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Model3 from './components/Model3';
import ModelS from './components/ModelS';
import ModelX from './components/ModelX';
import MainLayout from './layout/MainLayout';
// import login from './components/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/models" element={< ModelS />}></Route>
          <Route path="/model3" element={< Model3 />}></Route>
          <Route path="/modelx" element={< ModelX />}></Route>
          {/* <Route path="/login" element={< login />}></Route> */}
          </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
