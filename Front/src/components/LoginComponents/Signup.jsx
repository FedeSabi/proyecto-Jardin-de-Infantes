import React, { useState } from 'react';
import Login from './Login.jsx';

const Signup = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`bg-white p-3 rounded w-25 border-2 m-2 ${showLogin ? 'hidden' : ''}`}>
        <h2 className="size-[2rem] p-4 w-[100%] mx-auto font-bold flex items-center justify-center">
          REGISTRO
        </h2>
        <form className="p-3 flex flex-col gap-3">
                    <div className="mb-3 flex flex-col ">
                        <label htmlFor="email">
                            <strong>Nombre</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Ingrese su nombre"
                            autoComplete="off"
                            name="email"
                            className="border-2 p-1"
                        />
                    </div>
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
                    <button
            type="button"
            className="border-2 text-white p-2 w-100 rounded-none bg-light-green-300 hover:bg-light-green-500 w-[100%] mx-auto"
            onClick={handleLoginClick}
          >
            Registrarse
          </button>
        </form>
        <p className='p-3'>El mail ya se encuentra registrado</p>
        {!showLogin && (
        <button
          type="button"
          className="border-2 w-100 p-1 rounded-none bg-white hover:bg-light-blue-100 w-[100%] mx-auto"
          onClick={() => setShowLogin(true)}
        >
          Ingresar
        </button>
      )}
      </div>
      {showLogin && <Login />}
    </div>
  );
};

export default Signup;
