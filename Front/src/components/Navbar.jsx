import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <nav className="z-50 lg:fixed lg:left-1/2 lg:top-[55px] lg:w-[56.25rem] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:rounded-xl lg:bg-gray-200 lg:bg-opacity-10 lg:backdrop-blur-md xl:w-[79.25rem]">
        <div className="flex items-center justify-between px-[31px] py-4">
          <Link to="/">
            <span className="font-bold leading-8 lg:text-2xl">
              Nubes de algodón
            </span>
          </Link>

          <ul className="hidden items-center gap-4 lg:flex">
            <li>
              <Link className="font-medium" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li
              className={`dropdown_menu flex cursor-pointer items-center gap-[14.4px] ${
                isDropdownOpen ? "open" : ""
              }`}
              onClick={toggleDropdown}
            >
              <span className="text-white">Servicios</span>
              <img src="/Arrow down.svg" alt="Arrow down" />
              {isDropdownOpen && (
                <ul className="dropdown_content space-y-2 lg:absolute lg:top-[70px] lg:w-44 lg:rounded-lg lg:bg-white lg:p-4">
                  <li>
                    <Link className="text-black" to="/cuna">
                      Cuna
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/jardín">
                      Jardín
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black"
                      to="/estimulación psicopedagógica"
                    >
                      Estimulación psicopedagógica
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/estimulación temprana">
                      Estimulación temprana
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/talleres">
                      Talleres
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/escuela de padres">
                      Escuela de padres
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black" to="/cocina">
                      Cocina
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link className="text-white" to="/facilities">
                Instalaciones
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/admisión">
                Admisión
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/galería">
                Galería
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>

          <button className="lg:hidden">
            <img src="/Hamburger.svg" alt="Hamburger icon" />
          </button>
        </div>

        <div className="h-[1px] w-full bg-[#EEEEEE] md:hidden"></div>
      </nav>
    </div>
  );
};
