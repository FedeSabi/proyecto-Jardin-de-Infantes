import { Link } from "react-router-dom";


const Guarderia =()=>{
    return(
        <section className="overflow-x-hidden">
            <div className="w-screen m-[0px] h-[376px] bg-discos bg-cover bg-center">
                <h1 className="text-white px-[112px] pt-[160px] max-w-[1050px] h-[144px] text-[58px] leading-[72px] font-normal">
                    Guardería infantil educativo desde Nubes de Algodón
                </h1>
            </div>
            <div className="flex w-232 gap-6 mt-[1rem] mx-[112px]">
                <Link className="text-black font-medium" to="/">
                    Home
                </Link>
                <p>/</p>
                <Link className="text-black font-medium" to="/servicios">
                    Servicios
                </Link>
                <p>/</p>
                <p className="text-[#7C858E]">Guardería</p>
            </div>
        </section>
    )
}
export default Guarderia
