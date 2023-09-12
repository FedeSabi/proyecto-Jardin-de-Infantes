import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

const NavLink = ({ to, text }) => (
    <ScrollLink
        spy={true}
        smooth={true}
        to={to}
        className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f">
        <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-f">
            {text}
        </li>
    </ScrollLink>
);

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <NavLink to="/Contacto" text="Contacto" />
                            <NavLink to="/Inicio" text="Inicio" />
                            <NavLink to="/Instalaciones" text="Instalaciones" />
                            <NavLink to="/Matricula" text="Matricula" />
                            <NavLink to="/Nosotros" text="Nosotros" />
                            <NavLink to="/Servicios" text="Servicios" />
                        </ul>
                    </div>
                </div>
                <div>
                    {click && (
                        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
                            <ul className="text-center text-xl p-20">
                                <NavLink to="/Contacto" text="Contacto" />
                                <NavLink to="/Inicio" text="Inicio" />
                                <NavLink
                                    to="/Instalaciones"
                                    text="Instalaciones"
                                />
                                <NavLink to="/Matricula" text="Matricula" />
                                <NavLink to="/Nosotros" text="Nosotros" />
                                <NavLink to="/Servicios" text="Servicios" />
                            </ul>
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
