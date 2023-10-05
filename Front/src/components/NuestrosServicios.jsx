import cuna from '../assets/servicio_cuna.png';
import guarderia from '../assets/servicio_guarderia.png';
import jardin from '../assets/servicio_jardin.png';

const NuestrosServicios = () => {
  return (
    <>
      <div className="flex text-center justify-center">
        <h1 className="text-3xl font-medium leading-tight">
          Nuestros Servicios
        </h1>
      </div>
      <div className="mt-6 flex text-center justify-center">
        <p className="text-lg text-center justify-center w-[544px]">
          Tenemos una amplia gama de servicios diseñados para nutrir el crecimiento integral de su hijo
        </p>
      </div>
      <div className="flex justify-center">
        <div className="max-w-xs bg-white shadow-md rounded overflow-hidden m-4 relative">
          <img
            src={cuna}
            alt="Nature"
            className="w-full transform scale-140"
          />
          <button className="bg-white text-black w-[90%] p-6 rounded absolute bottom-0 left-0 right-0 mx-auto mb-4">
            Button
          </button>
        </div>
        <div className="max-w-xs bg-white shadow-md rounded overflow-hidden m-4 relative">
          <img
            src={jardin}
            alt="Nature"
            className="w-full transform scale-140"
          />
          <button className="bg-white text-black w-[90%] p-6 rounded absolute bottom-0 left-0 right-0 mx-auto mb-4">
            <p className=''>Jardin 1 a 2 años</p>
          </button>
        </div>
        <div className="max-w-xs bg-white shadow-md rounded overflow-hidden m-4 relative">
          <img
            src={guarderia}
            alt="Nature"
            className="w-full transform scale-140"
          />
          <button className="bg-white text-black w-[90%] p-6 rounded absolute bottom-0 left-0 right-0 mx-auto mb-4">
            Button
          </button>
        </div>
      </div>
    </>
  );
};

export { NuestrosServicios }
