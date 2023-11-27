import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <header className="h-[376px] bg-discos bg-cover bg-center">
          <div className="mx-auto flex h-72 max-w-[76rem] pb-[60px] pt-[172px]">
            <h1 className="ml-[112px] text-[58px] font-semibold leading-[72px] text-white">
              Iniciar sesión
            </h1>
          </div>
      </header>
      <div className="flex justify-center items-center ">
        <div className="bg-white p-3 rounded w-25 border-2 m-2">
          <h2 className="size-[2rem] p-4 w-[100%] mx-auto font-bold flex items-center justify-center">
            INGRESO
          </h2>
          <form className="p-3 flex flex-col gap-3">
                  <div className="mb-3 flex flex-col ">
                          <label htmlFor="email">
                              <strong>E-mail</strong>
                          </label>
                          <input
                              type="text"
                              placeholder="Ingrese su email"
                              autoComplete="off"
                              name="email"
                              className="border-2 p-1"
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
                          />
                      </div>
                      <button type="submit" className="border-2 text-white p-2 w-100 rounded-none bg-light-green-300 hover:bg-light-green-500 w-[100%] mx-auto">Ingresar</button>
                  </form>
                  <Link
            to="/recuperarPassword"
            className="underline italic text-blue-700 text-[0.9rem] p-3"
          >
            Olvidé mi contraseña
          </Link>
          <p className='p-3'>El mail ya se encuentra registrado</p>
          <Link 
              to="/registro"
              type="button"
              className="border-2 w-100 p-1 rounded-none bg-white hover:bg-light-blue-100 w-[90%] flex justify-center items-center mx-auto"
            >
              Registrarse
          </Link>
        </div>
      </div>
  </>
  )
};


