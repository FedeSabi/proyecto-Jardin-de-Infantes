import nenaSaltando from '../assets/home_img_hero.png';

const Inicio = () => {
  return (
    <section className="flex bg-rose-300 p-4">
      <div className="flex-1">
        <h1 className="text-left font-bold text-5xl py-8 px-8 mt-16">Educación Temprana, cuidado y aprendizaje en un ambiente de alegría</h1>
        <h2 className='text-left font-bold justify-center py-8 px-8 mt-1'>
            Nuestra guarderia ofrece un mundo de aprendizaje y descubrimiento. Solicita una admision y unete a nosotros para darle a tu hijo la mejor experiencia educativa.
        </h2>
        <button>Solicitar ahora</button>
      </div>
      <div className="flex-1" >
        <img src={nenaSaltando} alt="nena" className='w-1/2 py-3 px-3 m-12' />
      </div>
    </section>
  );
};

export { Inicio };

