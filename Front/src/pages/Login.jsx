import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <header className="h-[376px] bg-discos bg-cover bg-center">
        <div className="mx-auto flex h-72 max-w-[76rem] pb-[60px] pt-[172px]">
          <h1 className="ml-[112px] text-[58px] font-semibold leading-[72px] text-white">
            Login / Registro
          </h1>
        </div>
      </header>
      <div className="w-232 mx-auto mt-[40px] flex max-w-[76rem] gap-6 px-[112px]">
        <Link className="font-medium text-black hover:text-gray-300" to="/">
          Home
        </Link>
        <p>/</p>
        <p className="text-[#7C858E]">Login</p>
      </div>
      <div className="mx-auto flex h-[50vh] max-w-[75rem] items-center justify-evenly gap-10">
        <form className="flex flex-col gap-3">
          {/* ... Rest of the code ... */}
        </form>
        <form className="flex flex-col gap-3">
          {/* ... Rest of the code ... */}
        </form>
      </div>
    </>
  );
};

export default Login;
