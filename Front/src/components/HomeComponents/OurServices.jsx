import PropTypes from "prop-types";

const ServiceCard = ({ imageSrc, title, ageRange }) => (
    <div className="relative rounded-2xl">
        <img className="w-[384px] h-[368px]" src={imageSrc} alt={title} />
        <button className="bg-white text-black w-[90%] py-4 px-8 rounded-2xl absolute bottom-0 left-0 right-4 mx-auto mb-4 flex justify-between items-center">
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
    <section className="mt-[320px] max-w-[75rem] mx-auto">
        <div className="flex justify-center">
            <h2 className="text-4xl font-medium leading-[48px] tracking-[0.09px]">
                Nuestros Servicios
            </h2>
        </div>
        <div className="mt-6 flex text-center justify-center">
            <p className="text-xl w-[630px]">
                Tenemos una amplia gama de servicios diseñados para nutrir el
                crecimiento integral de su hijo.
            </p>
        </div>
        <div className="grid grid-cols-3 mt-[88px]">
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
            <button className="h-20 mt-24 border-2 border-black rounded-[62.5rem] flex justify-between items-center px-6 gap-4">
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
