import {
  BrowserRouter as Router,
  Routes,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Hero from "./components/Hero";
import Foro from './components/Foro';
import Noticias from './components/Noticias';
import Informar from './components/Informar';
import Create from "./components/Create";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
           
          </div>
          <nav className=" w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-blue-600 py-4 md:px-10 px-7">
              <div className="font-bold text-white text-2xl cursor-pointer flex items-center">
                <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in font-bold md-flex">
                  <li className="md:ml-2 text-xl font-rubik hover:text-rosado"><Link to="/Hero">Inicio</Link></li>
                  <li className="md:ml-2 text-xl font-rubik hover:text-rosado"><Link to="/Noticias">Noticias</Link></li>
                  <li className="md:ml-2 text-xl font-rubik hover:text-rosado"><Link to="/Foro">Foro</Link></li>
                  <li className="md:ml-2 text-xl font-rubik hover:text-rosado"><Link to="/Informar">Informar</Link></li>
                  <li className="md:mx-96 border-2 border-white bg-yellow-300 text-white font-rubik py-1 px-4 rounded  hover:bg-rosado duration-500 text-xl">
                    <Link to="/">Juega Ahora!</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/Hero" element={<Hero />}/> 
          <Route path="/Noticias" element={<Noticias/>} />
          <Route path="/Foro" element={<Foro />} />
          <Route path="/Informar" element={<Informar />} />
        </Routes>
      </div>
    </Router>
  );

}


export default App;