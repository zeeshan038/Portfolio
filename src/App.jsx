
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';



function App() {
  return (
    <div >
     <BrowserRouter>
       <Navbar/>
      <Routes>

      <Route path={'/'} element={<Home/>}/>
    

      </Routes>
     
     
     
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
