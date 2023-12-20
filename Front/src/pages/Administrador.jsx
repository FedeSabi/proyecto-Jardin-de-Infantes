import  { useState } from 'react';

const Administrador = () => {

  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    genero: '',
    nombretutor: '',
    fechaNacimiento: '',
    nivelEducacion: '',
    telefonoContacto: '',
    email:'',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }
const handleModificarClick = () => {
  setEditing(true)
}

const handleGuardarClick = () => {
  //aca podemos hacer la logica de guardar las modificaciones de datos
  setEditing(false)
}

const handleEliminarClick = () => {
  // aca la logica de eliminar los elementos
}

  return (
    <div className="mt-40">
      <div className="flex flex-col text-center">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Nombre</th>
                  <th scope="col" className="px-6 py-4">Apellido</th>
                  <th scope="col" className="px-6 py-4">Genero</th>
                  <th scope="col" className="px-6 py-4">Nombre Tutor</th>
                  <th scope="col" className="px-6 py-4">Fecha Nacimiento</th>
                  <th scope="col" className="px-6 py-4">Nivel Educacion</th>
                  <th scope="col" className="px-6 py-4">Telefono contacto</th>
                  <th scope="col" className="px-6 py-4">Email</th>  
                 
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {editing ? ( <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'mark'
                   )}
                   </td> 
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'smith'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="genero"
                  value={formData.genero}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'masculino'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="nombreTutor"
                  value={formData.nombretutor}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'oscar sanchez'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                  />
                  ) : (
                   '11-10-2011'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="nivelEducacion"
                  value={formData.nivelEducacion}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'cuna'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="number"
                  name="telefonoContacto"
                  value={formData.telefonoContacto}
                  onChange={handleInputChange}
                  />
                  ) : (
                   '155-154947'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'mark@gmail.com'
                   )}
                  </td>
                  <button
                        className="text-green-700 text-center text-md m-2"
                        onClick={editing ? handleGuardarClick : handleModificarClick}
                      >
                        {editing ? 'Guardar' : 'Modificar'}
                      </button>
                      <button
                        className="text-red-700 text-center text-md m-2"
                        onClick={handleEliminarClick}
                      >
                        Eliminar
                      </button>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {editing ? ( <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'mark'
                   )}
                   </td> 
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'smith'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="genero"
                  value={formData.genero}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'masculino'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="nombreTutor"
                  value={formData.nombretutor}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'oscar sanchez'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                  />
                  ) : (
                   '11-10-2011'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="nivelEducacion"
                  value={formData.nivelEducacion}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'cuna'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="number"
                  name="telefonoContacto"
                  value={formData.telefonoContacto}
                  onChange={handleInputChange}
                  />
                  ) : (
                   '155-154947'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'mark@gmail.com'
                   )}
                  </td>
                  <button
                        className="text-green-700 text-center text-md m-2"
                        onClick={editing ? handleGuardarClick : handleModificarClick}
                      >
                        {editing ? 'Guardar' : 'Modificar'}
                      </button>
                      <button
                        className="text-red-700 text-center text-md m-2"
                        onClick={handleEliminarClick}
                      >
                        Eliminar
                      </button>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {editing ? ( <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'mark'
                   )}
                   </td> 
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'smith'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="genero"
                  value={formData.genero}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'masculino'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="nombreTutor"
                  value={formData.nombretutor}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'oscar sanchez'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                  />
                  ) : (
                   '11-10-2011'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="text"
                  name="nivelEducacion"
                  value={formData.nivelEducacion}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'cuna'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="number"
                  name="telefonoContacto"
                  value={formData.telefonoContacto}
                  onChange={handleInputChange}
                  />
                  ) : (
                   '155-154947'
                   )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  {editing ? ( <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  />
                  ) : (
                   'mark@gmail.com'
                   )}
                  </td>
                  <button
                        className="text-green-700 text-center text-md m-2"
                        onClick={editing ? handleGuardarClick : handleModificarClick}
                      >
                        {editing ? 'Guardar' : 'Modificar'}
                      </button>
                      <button
                        className="text-red-700 text-center text-md m-2"
                        onClick={handleEliminarClick}
                      >
                        Eliminar
                      </button>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Administrador