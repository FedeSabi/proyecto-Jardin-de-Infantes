import axios from 'axios';
import { useState, useEffect } from 'react';

const Administrador = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nivel, setNivel] = useState('jardin');
  const [idUsuarioEliminar, setIdUsuarioEliminar] = useState(null);
  const [idUsuarioActualizar, setIdUsuarioActualizar] = useState(null);
  const [nombreActualizar, setNombreActualizar] = useState('');
  const [apellidoActualizar, setApellidoActualizar] = useState('');
  const [generoActualizar, setGeneroActualizar] = useState('');
  const [emailActualizar, setEmailActualizar] = useState('');
  const [nombreTutorActualizar, setNombreTutorActualizar] = useState('');
  const [telefonoActualizar, setTelefonoActualizar] = useState('');
  const [nacimiento, setNacimiento] = useState('');

  

  const handleUpdateClick = async (id) => {
    try {
      setIdUsuarioActualizar(id);
      
      const updatedUser = {
        nombre: nombreActualizar,
        apellido: apellidoActualizar,
        genero: generoActualizar,
        email: emailActualizar,
        nombreTutor: nombreTutorActualizar,
        telefono: telefonoActualizar,
        
      };
      await axios.put(`http://localhost:3000/actualizar/${idUsuarioActualizar}`, updatedUser);
      const response = await axios.get(`http://localhost:3000/usuarios/${nivel}`);
      setUsuarios(response.data);
      setIdUsuarioActualizar(null);
      
      setNombreActualizar('');
      setApellidoActualizar('');
      setGeneroActualizar('');
      setEmailActualizar('');
      setNombreTutorActualizar('');
      setTelefonoActualizar('');
    } catch (error) {
      console.error('Error al preparar o realizar la actualización:', error);
    }
  };

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/usuarios/${nivel}`);
        setUsuarios(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    obtenerUsuarios();
  }, [nivel, idUsuarioEliminar, idUsuarioActualizar]);

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/eliminar/usuario/${id}`);
      setUsuarios(usuarios.filter((usuario) => usuario._id !== id));
      setIdUsuarioEliminar(null); // Limpia el estado después de eliminar
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 flex-shrink-0">
        <div className="flex-auto bg-gray-900 h-full ">
          <div className="flex flex-col overflow-y-auto ">
            <ul className="relative m-0 p-0 list-none h-full mt-[30%]">
             
              <div
                className={`text-white flex relative px-4 hover:bg-gray-700 cursor-pointer ${
                  nivel === 'cuna' && 'bg-gray-700'
                }`}
                onClick={() => setNivel('cuna')}
              >
                <div className="mr-4 my-auto">
                  <svg
                    className="fill-current h-5 w-5"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                
                  </svg>
                </div>
                <div className="flex-auto my-1">
                  <span>Cuna</span>
                </div>
              </div>

              <div
                className={`text-white flex relative px-4 hover:bg-gray-700 cursor-pointer ${
                  nivel === 'jardin' && 'bg-gray-700'
                }`}
                onClick={() => setNivel('jardin')}
              >
                <div className="mr-4 my-auto">
                  <svg
                    className="fill-current h-5 w-5"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                 
                  </svg>
                </div>
                <div className="flex-auto my-1">
                  <span>Jardín</span>
                </div>
              </div>


              <div
                className={`text-white flex relative px-4 hover:bg-gray-700 cursor-pointer ${
                  nivel === 'guarderia' && 'bg-gray-700'
                }`}
                onClick={() => setNivel('guarderia')}
              >
                <div className="mr-4 my-auto">
                  <svg
                    className="fill-current h-5 w-5"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                  
                  </svg>
                </div>
                <div className="flex-auto my-1 ">
                  <span>Guarderia</span>
                </div>
              </div>
      
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-col w-full">
      
        <div className="text-white  bg-blue-400 h-36 flex w-full items-end no-underline ">
          <div className="flex overflow-hidden  h-12 ml-2 ">
            <button
              className={`mx-3 border-b-2 border-white ${nivel === 'jardin' && 'border-blue-400'}`}
              onClick={() => setNivel('jardin')}
            >
              <span>Jardín</span>
            </button>

            <button
              className={`mx-3 border-b-2 border-white ${nivel === 'cuna' && 'border-blue-400'}`}
              onClick={() => setNivel('cuna')}
            >
              <span>Cuna</span>
            </button>
            
            <button
              className={`mx-3 border-b-2 border-white ${nivel === 'guarderia' && 'border-blue-400'}`}
              onClick={() => setNivel('guarderia')}
            >
              <span>guarderia</span>
            </button>
          </div>
        </div>
        <div className="flex-auto p-4">
          <table className="min-w-full border rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className=" py-2 px-4">Nombre</th>
                <th className=" py-2 px-4">Apellido</th>
                <th className=" py-2 px-4">Genero</th>
                <th className=" py-2 px-4">Correo Electrónico</th>
                <th className=" py-2 px-4">Nombre del Tutor</th>
                <th className=" py-2 px-4">Teléfono</th>
                <th className=" py-2 px-4">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200">
              {usuarios.map((usuario) => (
                <tr key={usuario._id} className="text-black">
                  <td className=" py-2 px-4 text-center">{usuario.nombre}</td>
                  <td className=" py-2 px-4 text-center">{usuario.apellido}</td>
                  <td className=" py-2 px4- text-center">{usuario.genero}</td>
                  <td className=" py-2 px-4 text-center">{usuario.email}</td>
                  <td className=" py-2 px-4 text-center">{usuario.nombreTutor}</td>
                  <td className=" py-2 px-4 text-center">{usuario.telefono}</td>
                  <td className=" py-2 px-4 text-center">
                  <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleUpdateClick(usuario._id)}
          >
            Modificar
          </button>
                    <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => eliminarUsuario(usuario._id)}
                      >
                    Eliminar
                   </button>

                  </td>
                  
                </tr>
              ))}
            </tbody>
            
          </table>
          {idUsuarioActualizar && (
        <div className="flex-auto p-4">
          <h2 className='bg-blue-500 w-[150px] h-[40px] flex justify-center items-center rounded-lg  mb-[26px] text-white'>Modificar Usuario</h2>
          <form onSubmit={(e) => handleUpdateClick(e)}className='flex flex-col'>
            <label className='mb-2'>Nombre:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="text"
              value={nombreActualizar}
              onChange={(e) => setNombreActualizar(e.target.value)}
            />
             <label className='mb-2 mt-2'>Apellido:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="text"
              value={apellidoActualizar}
              onChange={(e) => setApellidoActualizar(e.target.value)}
            />
              <label className='mb-2 mt-2'>Genero:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="text"
              value={generoActualizar}
              onChange={(e) => setGeneroActualizar(e.target.value)}
              
            />
               <label className='mb-2 mt-2'>Email:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="text"
              value={emailActualizar}
              onChange={(e) => setEmailActualizar(e.target.value)}
            />
             <label className='mb-2 mt-2'>Fecha de nacimiento:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="date"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
             <label className='mb-2 mt-2'>Nivel:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="text"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            />
              <label className='mb-2 mt-2'>Nombre de tutor:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="text"
              value={nombreTutorActualizar}
              onChange={(e) => setNombreTutorActualizar(e.target.value)}
            />
              <label className='mb-2 mt-2'>telefono:</label>
            <input className='w-1/5 h-7 rounded-lg border border-solid border-gray-500'
              type="text"
              value={telefonoActualizar}
              onChange={(e) => setTelefonoActualizar(e.target.value)}
            />
            <button className='w-[20%] h-10 mt-[10px] bg-green-500 rounded-lg text-white' type="submit">Guardar cambios</button>
          </form>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};
export { Administrador };

