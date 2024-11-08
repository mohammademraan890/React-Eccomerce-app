import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
// import Cart from "./Pages/Cart";

import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
function App() {
  const Home = lazy(() => import("./Pages/Home"));
  const Cart = lazy(() => import("./Pages/Cart"));
  
  function Root() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    );
  }
  const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

  return (
    <Suspense
      fallback={
        <>
          <p>LOADING</p>
        </>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
    // <Login></Login>
    // <Register></Register>
    // <Product></Product>
    //  <Cart></Cart>
  );
}

export default App;
