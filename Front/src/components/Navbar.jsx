import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="relative">
      <nav className="z-50 lg:fixed lg:left-1/2 lg:top-[55px] lg:w-[56.25rem] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:rounded-xl lg:bg-gray-200 lg:bg-opacity-10 lg:backdrop-blur-md xl:w-[79.25rem]">
        <div className="flex items-center justify-between px-[27px] py-4">
          <Link to="/">
            <img className="w-24" src="/logo.svg" alt="logo" />
          </Link>

          <ul className="hidden items-center gap-4 lg:flex">
            <li>
              <Link className="font-medium" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-black" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-black" to="/servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-black" to="/facilities">
                Instalaciones
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-black" to="/admission">
                Admisión
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-black" to="/contact">
                Contacto
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-black" to="/login">
                Administrador
                {/* hacer un IF, si no está logueado mostrar "Login", si ya está logueado mostrar la foto de perfil del usuario */}
              </Link>
            </li>
          </ul>

          <button className="lg:hidden">
            <img src="/Hamburger.svg" alt="Hamburger icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};
