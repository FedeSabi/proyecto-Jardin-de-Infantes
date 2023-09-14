import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./pages/Inicio";
import { Contacto } from "./pages/Contacto";
import { Instalaciones } from "./pages/Instalaciones";
import { Nosotros } from "./pages/Nosotros";
import { Servicios } from "./pages/Servicios";
import { Matricula } from "./pages/Matricula";
import { Footer } from "./components/Footer";


const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="/Instalaciones" element={<Instalaciones />} />
                    <Route path="/Nosotros" element={<Nosotros />} />
                    <Route path="/Servicios" element={<Servicios />} />
                    <Route path="/Matricula" element={<Matricula />} />
            </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;


