import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import VenueSinglePage from "./data/VenueSinglePage";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productList" element={<ProductList />} />

            <Route path="/api/venues/:id" element={<VenueSinglePage />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
