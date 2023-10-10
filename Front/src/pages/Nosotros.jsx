import discos from "../../public/nosotros_discos.png";
import { Link } from "react-router-dom";

const Nosotros =()=>{
    return(
        <section className="overflow-x-hidden">
            <div className="w-screen h-[376px] bg-discos bg-cover bg-center">
                <h1 className="text-white pl-[112px] pt-[160px] w-[1050px] h-[144px] text-[58px] leading-[72px] font-normal">
                    Guardería infantil educativo desde Nubes de Algodón
                </h1>
            </div>
            <div className="flex w-232 gap-6 mt-[1rem] mx-[112px]">
                <Link className="text-black font-medium" to="/">
                    Home
                </Link>
                <p>/</p>
                <p className="text-[#7C858E]">Nosotros</p>
            </div>
            <p className="mt-[3rem] mx-[112px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime porro, nisi architecto reprehenderit deleniti excepturi nulla perferendis dicta voluptates unde consequuntur necessitatibus? Omnis placeat explicabo dicta doloremque qui quo vitae quae ab quos minima tempore, unde fuga odit reprehenderit dolorem consequuntur deserunt quod obcaecati! Vitae blanditiis aliquid quae fugit quo qui mollitia, in excepturi eveniet iste aperiam veritatis neque illo, voluptates accusamus reprehenderit eum veniam? Inventore est beatae ullam delectus magnam, aliquam quibusdam id corporis soluta.</p>

            
            
        </section>
    )
}
export { Nosotros }