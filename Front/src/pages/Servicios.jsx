import { AiOutlineArrowRight } from "react-icons/ai";

const Servicios = () => {
  return (
    <section className="overflow-x-hidden">
      <header className="h-[376px] bg-discos bg-cover bg-center pt-[172px]">
        <div className=" mx-auto max-w-[76rem]">
          <h1 className="text-[58px] font-normal leading-[72px] text-white">
            Nuestros Servicios
          </h1>
        </div>
      </header>

      <p className="mx-auto mb-[4rem] mt-[176px] max-w-[76rem]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id es. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut
      </p>

      <div className="mx-auto mb-[256px] grid max-w-[76rem] grid-cols-3 gap-[1rem]">
        <div className="flex w-[384px] items-end justify-center rounded-2xl bg-cuna bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">Cuna</h4>
              <p className="text-[16px] leading-[24px] text-gray-400">
                0 a 9 meses
              </p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
        <div className="flex h-[400px] w-[384px] items-end justify-center rounded-2xl bg-jardin bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">Jardín</h4>
              <p className="text-[16px] leading-[24px] text-gray-400">
                1 a 2 años
              </p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
        <div className="flex h-[400px] w-[384px] items-end justify-center rounded-2xl bg-guarderia bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">
                Guardería
              </h4>
              <p className="text-[16px] leading-[24px] text-gray-400">
                2 a 5 años
              </p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
        <div className="flex h-[400px] w-[384px] items-end justify-center rounded-2xl bg-psicopedagogia bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">
                E. Psicopedagogía
              </h4>
              <p className="text-[16px] leading-[24px]">Taller</p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
        <div className="flex h-[400px] w-[384px] items-end justify-center rounded-2xl bg-temprana bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">
                E. Temprana
              </h4>
              <p className="text-[16px] leading-[24px]">Bebés & Niños</p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
        <div className="flex h-[400px] w-[384px] items-end justify-center rounded-2xl bg-talleres bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">
                Talleres
              </h4>
              <p className="text-[16px] leading-[24px]">Niños y Padres</p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
        <div className="flex h-[400px] w-[384px] items-end justify-center rounded-2xl bg-cocina bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">Cocina</h4>
              <p className="text-[16px] leading-[24px]">Servicio</p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
        <div className="flex h-[400px] w-[384px] items-end justify-center rounded-2xl bg-escuela bg-cover bg-center">
          <button className="mb-[1rem] flex h-[88px] w-[356px] items-center rounded-2xl bg-white px-[2rem]">
            <div className="flex w-[252px] flex-col items-start">
              <h4 className="text-[24px] font-medium leading-[32px]">
                Escuela de Padres
              </h4>
              <p className="text-[16px] leading-[24px] text-gray-400">
                Servicio
              </p>
            </div>
            <div className="ml-[1rem] flex h-[40px] w-[40px] items-center justify-center rounded-[1000px] border-[2px] border-solid border-gray-300 hover:bg-[#D9D9D9]">
              <AiOutlineArrowRight className="text-[16px] text-black" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
export { Servicios };
