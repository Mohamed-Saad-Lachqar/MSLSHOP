import "./App.css";
import Nav from "./component/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/cotact/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Last from "./component/last";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route exact path="/MSLSHOP/" element={<Home />} />
          <Route exact path="/MSLSHOP/about" element={<About />} />
          <Route exact path="/MSLSHOP/contact" element={<Contact />} />
        </Routes>
        <Last />
      </BrowserRouter>
    </div>
  );
}

export default App;
