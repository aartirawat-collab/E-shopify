
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import Home from "./Home";
import Women from "./Women";
import Men from "./Men";
import Kid from "./Kid";
import Login from "./Login";
import Navbar from "./Navbar";

const  App = () => {
  return (
    <BrowserRouter>
    <Navbar />


  <Routes>
  <Route path="/" element={<div><Home /></div>} />
  <Route path="/women" element={<div><Women /></div>} />
  <Route path="/men" element={<div><Men /></div>} />
  <Route path="/kid" element={<div><Kid /></div>} />

  <Route path="/login" element={<div><Login /></div>} />
  </Routes>
  
 
  </BrowserRouter>

  );
}

export default App;
