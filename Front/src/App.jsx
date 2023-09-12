import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
