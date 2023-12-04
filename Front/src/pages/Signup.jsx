import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Signup = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        genero: '',
        nacimiento: '',
        nivel:'',
        telefono:'',
        email:'',
        password:''
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  const handleFormSubmit  = async (e) =>{
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5173/registro', formData);
        console.log(response.data);
    } catch (error) {
        console.error('Error en el registro:', error.response ? error.response.data : error.message);
      }
  }
  return (
    <>
      <header className="h-[376px] bg-discos bg-cover bg-center">
          <div className="mx-auto flex h-72 max-w-[76rem] pb-[60px] pt-[172px]">
            <h1 className="ml-[112px] text-[58px] font-semibold leading-[72px] text-white">
              Registro
            </h1>
          </div>
        </header>
        <div className="flex justify-center items-center">
            <div className="bg-white p-3 rounded w-25 border-2 m-2">
                <h2 className="size-[2rem] p-4 w-[100%] mx-auto font-bold flex items-center justify-center">
                REGISTRO
                </h2>
                <form onSubmit={handleFormSubmit} className="p-3 flex flex-col gap-3">
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="nombre">
                                    <strong>Nombre</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingrese su nombre"
                                    name="nombre"
                                    className="border-2 p-1"
                                    value={formData.nombre} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="apellido">
                                    <strong>Apellido</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingrese su apellido"
                                    name="apellido"
                                    className="border-2 p-1"
                                    value={formData.apellido} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="opciones">
                                    <strong>Género</strong>
                                </label>
                                <select id="opciones" name="opciones" className='overflow-hidden border-2 p-2' value={formData.genero} onChange={handleInputChange}>
                                    <option value="opcion1">Masculino</option>
                                    <option value="opcion2">Femenino</option>
                                    <option value="opcion3">Otro</option>
                                </select>
                            </div>
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="nacimiento">
                                    <strong>Fecha Nacimiento</strong>
                                </label>
                                <input
                                    type="date"
                                    placeholder="Ingrese su genero"
                                    name="nacimiento"
                                    className="border-2 p-1"
                                    value={formData.nacimiento} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="opciones">
                                    <strong>Nivel</strong>
                                </label>
                                <select id="opciones2" name="opciones2" className='overflow-hidden border-2 p-2' value={formData.nivel} onChange={handleInputChange}>
                                    <option value="opcion1">Cuna</option>
                                    <option value="opcion2">Jardín</option>
                                    <option value="opcion3">Guardería</option>
                                    <option value="opcion4">Escuela de Padres</option>
                                    <option value="opcion5">Talleres</option>
                                </select>
                            </div>
                            <div className="mb-3 flex flex-col">
                                <label htmlFor="telefono">
                                    <strong>Teléfono</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingrese su número telefónico"
                                    name="telefono"
                                    className="border-2 p-1"
                                    value={formData.telefono} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col ">
                                <label htmlFor="email">
                                    <strong>E-mail</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ingrese su email"
                                    name="email"
                                    className="border-2 p-1 appearance-none"
                                    value={formData.email} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3 flex flex-col">
                                <label htmlFor="email">
                                    <strong>Contraseña</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    name="password"
                                    className="border-2 p-1"
                                    value={formData.password} 
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button
                    type="submit"
                    className="border-2 text-white p-2 w-100 rounded-none bg-light-green-300 hover:bg-light-green-500 w-[100%] mx-auto"
                >
                    Registrarse
                </button>
                </form>
                <p className='p-3'>El mail ya se encuentra registrado</p>
                <Link to="/login"
                type="button"
                className="border-2 w-100 p-1 rounded-none bg-white hover:bg-light-blue-100 w-[90%] flex justify-center items-center mx-auto"
                >
                Ingresar
                </Link>
        </div>
    </div>
  </>
  );
};

