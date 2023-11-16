import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai"
const Guarderia =()=>{
    return(
        <section className="overflow-x-hidden">
            <div className="w-screen m-[0px] h-[376px] bg-discos bg-cover bg-center">
                <h1 className="text-white px-[112px] pt-[160px] max-w-[72rem] h-[144px] text-[58px] leading-[72px] font-normal">
                    Sembrando Sueños, Cosechando Futuros Brillantes
                </h1>
            </div>
            <div className="flex w-232 gap-6 mt-[1rem] mx-[112px]">
                <Link className="text-black font-medium hover:text-gray-300" to="/">
                    Home
                </Link>
                <p>/</p>
                <Link className="text-black font-medium hover:text-gray-300" to="/servicios">
                    Servicios
                </Link>
                <p>/</p>
                <p className="text-[#7C858E]">Guardería</p>
            </div>
            <div className="mx-[112px] mt-[3rem] flex gap-[1rem] max-w-[72rem] items-center hover:text-gray-300">
                <AiOutlineArrowLeft /> <Link to="/servicios">Volver</Link>
            </div>
            <div className="mx-[112px] mt-[3rem] max-w-[72rem] flex items-center justify-between flex-wrap">
                <div className="w-[50%] flex flex-col align-center">
                    <p className="text-[58px] leading-[72px] font-medium mb-[1rem]">Guardería</p>
                    <p className="text-[20px] leading-[32px] font-medium"><b>Nubes de Algodón</b> pone a disposición de los papis el servicio de guardería. Lugar en donde los niños después de disfrutar una mañana llena de actividades divertidas, se quedan en el nido y reciben un trato como en casa. Se les ofrece un almuerzo balanceado, enseñándoles hábitos de alimentación e higiene y teniendo una tarde recreativa con talleres complementarios que los mantendrán entretenidos hasta que sus papis puedan pasar a recogerlos.</p>
                    <p className="text-[20px] leading-[32px] font-medium">Horario: hasta las 6:00pm. </p>
                    <p className="text-[20px] leading-[32px] font-medium">Horario Extendido: hasta las 6:30pm.</p>
                </div>
                <div className="relative rounded-4xl max-h-[504px]">
                    <img src="/servicio_guarderia.png" className="max-h-[504px]" alt="niño jugando"/>
                    <h6 className="absolute bottom-0 right-[1rem] w-[210px] h-[64px] text-[18px] leading-[32px]">"Un lugar de confianza, con clima de hogar".</h6>
                </div>
            </div>
            <h2 className="mx-[112px] mt-[3rem] max-w-[72rem] text-[36px] leading-[48px] font-medium ">Por qué elegir una guardería con psicopedagogía en Parla</h2>
        </section>
    )
}
export default Guarderia
