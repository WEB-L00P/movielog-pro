import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page imports
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import SinglePage from "./pages/SinglePage";

//components imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" index element={<Home />} />
            <Route path=":id" element={<SinglePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<SinglePage />} />
            <Route path="search" element={<Search />} />
            <Route path="search/:id" element={<SinglePage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
