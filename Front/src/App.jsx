
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Jugamos } from './components/Jugamos/Jugamos';
import { Aulas } from "./components/Aulas/Aulas";
import { Instalaciones } from './components/Instalaciones/Instalaciones';
import { Footer } from './components/Footer/Footer';
function App() {


  return (
    <>
     
      <Navbar />
      <Jugamos />
      <Aulas />
      <Instalaciones />
      <Footer />
     
    </>
  )
}

export default App
