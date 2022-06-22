import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Produtos from "./components/Produtos";
import Contato from "./components/Contato";
import "./App.css";
import Produto from "./components/Produto";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
