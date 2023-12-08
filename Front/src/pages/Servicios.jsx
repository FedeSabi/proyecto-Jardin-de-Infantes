import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai"

const Servicios =()=>{
    const handleRedireccionar = () => {
        window.location.href = "/servicios/guarderia";
      };
    return(
        <section className="overflow-x-hidden">
            <div className="w-screen m-[0px] h-[376px] bg-discos bg-cover bg-center">
                <h1 className="text-white px-[112px] pt-[160px] max-w-[1050px] h-[144px] text-[58px] leading-[72px] font-normal">
                    Nuestros Servicios
                </h1>
            </div>
            <div className="flex w-232 gap-6 mt-[1rem] mb-[4rem] mx-[112px] max-w-[74rem]">
                <Link className="font-medium text-black hover:text-gray-300" to="/">
                    Home
                </Link>
                <p>/</p>
                <p className="text-[#7C858E]">Servicios</p>
            </div>
            <h5 className="mx-auto max-w-[74rem] mb-[4rem]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut</h5>
            <div className="flex gap-[1rem] flex-wrap mx-auto max-w-[74rem]">
                <div className="w-[384px] h-[400px] bg-cuna bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">Cuna</h4>
                            <p className="text-gray-400 text-[16px] leading-[24px]">0 a 9 meses</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
                <div className="w-[384px] h-[400px] bg-jardin bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">Jardín</h4>
                            <p className="text-gray-400 text-[16px] leading-[24px]">1 a 2 años</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
                <div className="w-[384px] h-[400px] bg-guarderia bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button onClick={handleRedireccionar} className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">Guardería</h4>
                            <p className="text-gray-400 text-[16px] leading-[24px]">2 a 5 años</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
                <div className="w-[384px] h-[400px] bg-psicopedagogia bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">E. Psicopedagogía</h4>
                            <p className="text-[16px] leading-[24px]">Taller</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
                <div className="w-[384px] h-[400px] bg-temprana bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">E. Temprana</h4>
                            <p className="text-[16px] leading-[24px]">Bebés & Niños</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
                <div className="w-[384px] h-[400px] bg-talleres bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">Talleres</h4>
                            <p className="text-[16px] leading-[24px]">Niños y Padres</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
                <div className="w-[384px] h-[400px] bg-cocina bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">Cocina</h4>
                            <p className="text-[16px] leading-[24px]">Servicio</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
                <div className="w-[384px] h-[400px] bg-escuela bg-cover bg-center rounded-2xl flex items-end justify-center">
                    <button className="w-[356px] h-[88px] bg-white rounded-2xl mb-[1rem] px-[2rem] flex items-center">
                        <div className="flex flex-col w-[252px] items-start">
                            <h4 className="text-[24px] leading-[32px] font-medium">Escuela de Padres</h4>
                            <p className="text-gray-400 text-[16px] leading-[24px]">Servicio</p>
                        </div>
                        <div className="ml-[1rem] w-[40px] h-[40px] border-solid border-[2px] border-gray-300 rounded-[1000px] flex items-center justify-center hover:bg-[#D9D9D9]">
                            <AiOutlineArrowRight className="text-[16px] text-black"/>
                        </div>
                    </button>  
                </div>
            </div>
        </section>
    )
}
export { Servicios }