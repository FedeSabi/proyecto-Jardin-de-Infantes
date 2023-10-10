import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Inicio } from "./pages/Inicio.jsx";
import { Footer } from "./components/Footer.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                </Routes>
                <Routes>
                    <Route path="/nosotros" element={<Nosotros />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default App;
