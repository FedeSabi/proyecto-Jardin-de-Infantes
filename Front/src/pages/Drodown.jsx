// Dropdown.js
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Cocina, Cuna, Escuela_de_padres, EstimulacionTemprana, Estimulacion_psicopedagogica, Guarderia, Jardin } from '../components/Index';
import { Talleres } from './Talleres';


function Dropdown({ to, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        {text}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
          <NavLink to={Cuna} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {Cuna}
          </NavLink>
          <NavLink to={Jardin} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {Jardin}
          </NavLink>
          <NavLink to={Guarderia} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {Guarderia}
          </NavLink>
          <NavLink to={Estimulacion_psicopedagogica} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {Estimulacion_psicopedagogica}
          </NavLink>
          <NavLink to={EstimulacionTemprana} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {EstimulacionTemprana}
          </NavLink>
          <NavLink to={Talleres} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {Talleres}
          </NavLink>
          <NavLink to={Escuela_de_padres} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {Escuela_de_padres}
          </NavLink>
          <NavLink to={Cocina} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {Cocina}
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Dropdown;



