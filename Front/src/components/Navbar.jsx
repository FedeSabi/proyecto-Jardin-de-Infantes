import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import { SiLinkedin,SiFacebook, SiInstagram  } from "react-icons/si";
import Dropdown from "../pages/Dropdown";

const NavLink = ({ to, text }) => (
    <ScrollLink
        spy={true}
        smooth={true}
        to={to}
        className="hover:text-red-600 transition text-bold-400">
        <li className="hover:text-red-600 transition text-bold-400">
            {text}
        </li>
    </ScrollLink>
);

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <span className="text-xl font-bold">Nubes de algodón</span>
                </div>
                <div className=" py-6 lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <NavLink to="/Inicio" text="Inicio" />
                            <NavLink to="/Nosotros" text="Nostros" />
                            <Dropdown to="/Servicios" text="Servicios" />
                            <NavLink to="/Instalaciones" text="Instalaciones" />
                            <NavLink to="/Matriculas" text="Matriculas" />
                            <NavLink to="/Contacto" text="Contacto" />
                        </ul>
                    </div>
                </div>
                <div>
                    {click && (
                        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-gray-300 transition ">
                            <ul className="text-left text-xl p-20 ">
                            <NavLink to="Inicio" text="Inicio" />
                            <NavLink to="Nosotros" text="Nosotros" />
                            <Dropdown className="text-xxxl  " to="/Servicios" text="Servicios" />
                            <NavLink to="/Instalaciones" text="Instalaciones" />
                            <NavLink to="/Matriculas" text="Matriculas" />
                            <NavLink to="/Contacto" text="Contacto" />
                            </ul>
                            <div className="flex flex-col p-20 mb-2 justify-left gap-5 py-4">
                                <h2 >Siguenos</h2>
                            <div className="flex gap-5 text-3xl">
                                <a href="http://"><SiLinkedin /></a>
                                <a href="http://"><SiFacebook /></a>
                                <a href="http://"><SiInstagram /></a>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    className="block sm:hidden transition"
                    onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};
export { Navbar };
