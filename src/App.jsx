import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Master from "./layout/Master";

const App = () => {
  return (
    <div>
       <BrowserRouter>
          <Routes>

              <Route path="/" element={<Master/>}>

                  <Route index element={<Home/>}/>
                  <Route path="product" element={<Product/>}/>
                  
              </Route>

          </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;