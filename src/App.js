import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<About/>} />

  <Route path="/skills" element={<Skills/>} />

  <Route path="/projects" element={<Projects/>} />

</Routes>
</BrowserRouter>
</>
  );
}

export default App;
