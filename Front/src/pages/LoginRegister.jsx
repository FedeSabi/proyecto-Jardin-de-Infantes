import React from 'react';
import Login from '../components/LoginComponents/Login.jsx';
import Signup from '../components/LoginComponents/Signup.jsx';

export const LoginRegister = () => {
  return (
    <>
      <header className="h-[376px] bg-discos bg-cover bg-center">
        <div className="mx-auto flex h-72 max-w-[76rem] pb-[60px] pt-[172px]">
          <h1 className="ml-[112px] text-[58px] font-semibold leading-[72px] text-white">
            Login / Registro
          </h1>
        </div>
      </header>
      <Login/>
      <Signup/>
    </>
  );
};
