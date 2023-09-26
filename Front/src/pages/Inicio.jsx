import nenaSaltando from "../assets/home_img_hero.png";
//import { SlArrowRightCircle } from "react-icons/sl";

const Inicio = () => {
  return (
    <section className="flex bg-yellow-200 p-4 ">
      <div className="flex-1">
        <h1 className="text-left font-bold text-5xl py-16 px-20 mt-16">
          Educación Temprana, cuidado y aprendizaje en un ambiente de alegría
        </h1>
        <h2 className="text-left text-2xl font-bold justify-center py-0 px-20 mt-1">
          Nuestra guarderia ofrece un mundo de aprendizaje y descubrimiento.
          Solicita una admision y unete a nosotros para darle a tu hijo la mejor
          experiencia educativa.
        </h2>
        <div className="m-10 p-5">
          <button className="bg-black rounded-3xl w-60 h-20 p-8 m-3 text-white ">
            Solicitar ahora
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={nenaSaltando} alt="nena" className="w-1/2 pt-28 py-3 px-3 m-auto" />
      </div>
    </section>
  );
};

export { Inicio };
