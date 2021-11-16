import './vendors/bootstrap/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './vendors/fontawesome/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
           </Routes>
    </BrowserRouter>
  );
}

export default App;
