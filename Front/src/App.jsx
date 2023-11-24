import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Footer } from "./components/Footer.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Servicios } from "./pages/Servicios.jsx";
import { Facilities } from "./pages/Facilities.jsx";
import Guarderia from "./pages/Servicios_guarderia.jsx";
import { Login } from "./pages/Login.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/servicios/guarderia" element={<Guarderia />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
