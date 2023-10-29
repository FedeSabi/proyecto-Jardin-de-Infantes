import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Facilities } from "./pages/Facilities.jsx";
import { Footer } from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
