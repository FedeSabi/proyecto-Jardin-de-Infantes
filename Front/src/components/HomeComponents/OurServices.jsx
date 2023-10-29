import PropTypes from "prop-types";

const ServiceCard = ({ imageSrc, title, ageRange }) => (
  <div className="relative rounded-2xl">
    <img className=" h-[368px] w-full" src={imageSrc} alt={title} />
    <button className="absolute bottom-0 left-0 right-4 mx-auto mb-4 flex w-[90%] items-center justify-between rounded-2xl bg-white px-8 py-4 text-black">
      <div className="flex flex-col">
        <span className="text-left text-2xl font-medium leading-[2rem] tracking-[0.00525rem]">
          {title}
        </span>
        <span>{ageRange}</span>
      </div>
      <img src="/iconService.svg" alt="icon service" />
    </button>
  </div>
);

export const OurServices = () => (
  <section className=" mx-auto mt-[20rem] max-w-[75rem]">
    <div className="flex justify-center">
      <h2 className="text-4xl font-medium leading-[48px] tracking-[0.09px]">
        Nuestros Servicios
      </h2>
    </div>
    <div className="mt-6 flex justify-center text-center">
      <p className="w-[630px] text-xl">
        Tenemos una amplia gama de servicios diseñados para nutrir el
        crecimiento integral de su hijo.
      </p>
    </div>
    <div className="mt-[88px] grid grid-cols-3 gap-8">
      <ServiceCard
        imageSrc="/servicio_cuna.png"
        title="Cuna"
        ageRange="0 a 9 meses"
      />
      <ServiceCard
        imageSrc="/servicio_jardin.png"
        title="Jardín"
        ageRange="3 a 2 años"
      />
      <ServiceCard
        imageSrc="/servicio_guarderia.png"
        title="Guardería"
        ageRange="2 a 5 años"
      />
    </div>
    <div className="flex justify-center">
      <button className="mt-24 flex h-20 items-center justify-between gap-4 rounded-[62.5rem] border-2 border-black px-6">
        <span className="text-lg font-medium leading-[2rem] tracking-[0.00563rem]">
          Conocer más
        </span>
        <img src="/knowMoreIcon.svg" alt="know more icon" />
      </button>
    </div>
  </section>
);

ServiceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ageRange: PropTypes.string.isRequired,
};
