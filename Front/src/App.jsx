import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Facilities } from "./pages/Facilities.jsx";
import { Admission } from "./pages/Admission.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Servicios } from "./pages/Servicios.jsx";
import Guarderia from "./pages/Servicios_guarderia.jsx";

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
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicios/guarderia" element={<Guarderia />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
