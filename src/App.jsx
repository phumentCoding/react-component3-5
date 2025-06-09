import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
       <Header/>
       <Navbar/>

       <BrowserRouter>
          <Routes>
              <Route path="home" element={ <Home/>}/>
              <Route path="product" element={ <Product/>} />
          </Routes>
       </BrowserRouter>

      
    </div>
  );
}

export default App;