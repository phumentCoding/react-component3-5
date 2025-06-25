import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Master from "./layout/Master";
import Cart from "./pages/Cart";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <div>
       <BrowserRouter>
          <Routes>

              <Route path="/" element={<Master/>}>

                  <Route index element={<Home/>}/>
                  <Route path="product" element={<Product/>}/>
                  <Route path="product/:productId" element={<ProductDetail/>} />
                  
                  {/* new router */}
                  <Route path="cart" element={<Cart/>}/>
                  
              </Route>

          </Routes>
       </BrowserRouter>

    </div>
  );
}