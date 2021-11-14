import './vendors/bootstrap/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
           <div className="container">
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
           </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;
