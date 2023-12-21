import  { useEffect, useState } from 'react';
import axios from 'axios';

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

const [usuarios, setUsuarios] = useState([])
const [indiceFilaEditada, setIndiceFilaEditada] = useState(null)

useEffect(() => {
  // Fetch de datos desde  el backend cuando el componente se monta
  // puedes adaptar la URL segun tu configuracion
  axios.get('http://tu-backend.com/usuarios/cuna')
  .then(response => setUsuarios(response.data))
  .catch(error => console.error('Error al obtener usuarios:', error))
}, []) //el array vacio asegura que este efecto se ejecute solo una vez al montar el componente

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }
const handleModificarClick = (index) => {
  setEditing(true)
  setIndiceFilaEditada(index)
  //puedes establecer los datos de la fila editada en el formulario
  setFormData(usuarios[index])
}

const handleGuardarClick = () => {
  //asumiendo que tienes una propiedad '_id' en tus datos para identificar a cada usuario
  const idUsuarioEditado = usuarios[indiceFilaEditada]._id
  axios.post(`http://tu-backend.com/actualizar/${idUsuarioEditado}`, formData)
  .then(response => {
    // actualiza el estado de usuarios con los datos modificados
    setUsuarios(prevUsuarios => {
      const nuevosUsuarios = [...prevUsuarios]
      nuevosUsuarios[indiceFilaEditada] = response.data
      return nuevosUsuarios
    })
  })
  .catch(error => console.error('Error al actualizar usuario:', error))

  setEditing(false)
  setIndiceFilaEditada(null)
  setFormData({
    nombre:'',
    apellido:'',
    genero:'',
    nombretutor:'',
    fechaNacimiento:'',
    nivelEducacion:'',
    telefonoContacto:'',
    email:'',  
})
}

const handleEliminarClick = (idUsuario) => {
  axios.delete(`http://tu-backend.com/eliminar/usuario/${idUsuario}`)
  .then(() => {
    //filtra el usuario eliminado de la lista
    setUsuarios(prevUsuarios => prevUsuarios.filter(usuario => usuario._id !== idUsuario))
  })
  .catch(error => console.error('Error al eliminar usuario:', error))
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