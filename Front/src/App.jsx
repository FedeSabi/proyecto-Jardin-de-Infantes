import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Inicio } from "./pages/Inicio.jsx";
import { Contacto } from "./pages/Contacto.jsx";
import { Instalaciones } from "./pages/Instalaciones.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Servicios } from "./pages/Servicios.jsx";
import { Matricula } from "./pages/Matricula.jsx";
import { Footer } from "./components/Footer.jsx";
import { Destacamos } from "./components/Destacamos.jsx"
import { NuestrosServicios } from "./components/NuestrosServicios.jsx";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="./pages/Contacto" element={<Contacto />} />
                    <Route path="/Instalaciones" element={<Instalaciones />} />
                    <Route path="/Nosotros" element={<Nosotros />} />
                    <Route path="/Servicios" element={<Servicios />} />
                    <Route path="/Matricula" element={<Matricula />} />
                </Routes>
                <Destacamos />
                <NuestrosServicios />
                <Footer />
            </Router>
        </>
    );
}

export default App;


