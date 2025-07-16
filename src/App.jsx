
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Chefs from "./components/Chefs.jsx";
import Blog from "./components/Blog.jsx";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/blog" element={<Blog />} />
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
