import { Link } from "react-router-dom";

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
          <h2 className="mx-auto font-extrabold">INGRESAR</h2>
          <label className="mx-auto">Mail / Usuario</label>
          <input
            type="email"
            placeholder="Ingresar Mail"
            className="rounded-xl border bg-gray-200 p-2 placeholder-black"
            required
          />
          <label className="mx-auto">Contraseña</label>
          <input
            type="password"
            placeholder="Ingresar Contraseña"
            className="rounded-xl border bg-gray-200 p-2 placeholder-black"
            required
          />
          <button
            type="submit"
            className="rounded-xl border border-solid border-black p-2 hover:bg-gray-600 hover:text-white"
          >
            Ingresar
          </button>
        </form>
        <form className="flex flex-col gap-3">
          <h2 className="mx-auto font-extrabold">REGISTRO</h2>
          <label className="mx-auto">Mail</label>
          <input
            type="email"
            placeholder="Ingresar Mail"
            className="rounded-xl border bg-gray-200 p-2 placeholder-black"
            required
          />
          <label className="mx-auto">Contraseña</label>
          <input
            type="contraseña"
            placeholder="Ingresar Contraseña"
            className="rounded-xl border bg-gray-200 p-2 placeholder-black"
            required
          />
          <button
            type="submit"
            className="rounded-xl border border-solid border-black p-2 hover:bg-gray-600 hover:text-white"
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
