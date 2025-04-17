import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import Layout from './Components/Layout'
import Cart from './Components/Cart'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
