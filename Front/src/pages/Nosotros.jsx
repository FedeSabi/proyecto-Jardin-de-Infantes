import { Link } from "react-router-dom";


const Nosotros =()=>{
    return(
        <section className="overflow-x-hidden">
            <header className="h-[376px] bg-discos bg-cover bg-center">
                <div className="mx-auto flex h-72 max-w-[76rem] pb-[60px] pt-[172px]">
                    <h1 className="ml-[112px] text-[58px] font-semibold leading-[72px] text-white">
                        Guardería infantil educativo desde Nubes de Algodón
                    </h1>
                </div>
            </header>
            <div className="flex w-232 gap-6 mt-[40px] mx-auto px-[112px] max-w-[76rem]">
                <Link className="text-black font-medium hover:text-gray-300" to="/">
                    Home
                </Link>
                <p>/</p>
                <p className="text-[#7C858E]">Nosotros</p>
            </div>
            <p className="mt-[112px] mx-auto px-[112px] max-w-[76rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime porro, nisi architecto reprehenderit deleniti excepturi nulla perferendis dicta voluptates unde consequuntur necessitatibus? Omnis placeat explicabo dicta doloremque qui quo vitae quae ab quos minima tempore, unde fuga odit reprehenderit dolorem consequuntur deserunt quod obcaecati! Vitae blanditiis aliquid quae fugit quo qui mollitia, in excepturi eveniet iste aperiam veritatis neque illo, voluptates accusamus reprehenderit eum veniam? Inventore est beatae ullam delectus magnam, aliquam quibusdam id corporis soluta.</p>
            <img src="/nosotros_ninios.png" alt="kids playing" className="mt-[56px] px-[112px] mx-auto max-w-[76rem]" />
            <div className="max-w-[76rem] mx-[auto] mt-[64px] flex justify-end">
                <p className="mr-[112px] text-[20px] leading-[32px] font-normal w-[592px] h-[96px]">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>
            <div className="flex flex-wrap justify-between max-w-[76rem] mx-auto mt-[144px]">
                <img src="/nosotros_mision_ninio.png" className="max-h-[528px]" alt="niño armando juguete" />
                <div className="flex flex-col justify-center gap-[2rem] max-w-[592px]">
                    <h2 className="text-[36px] leading-[48px] font-[500]">Nuestra Misión</h2>
                    <p className="text-[20px] leading-[32px]">Es crear un entorno seguro, amoroso y estimulante donde cada niño pueda florecer. Nos comprometemos a proporcionar una educación temprana de calidad que fomente el crecimiento holístico de los pequeños. Alentando su curiosidad, creatividad y desarrollo socioemocional. Valoramos la individualidad de cada niño y trabajamos en estrecha colaboración con las familias para nutrir su potencial único. Estamos dedicados a ser un faro de aprendizaje y cuidado en la vida de cada niño que pasa por nuestras puertas.</p>
                </div>
            </div>
            <div className="max-w-[72rem] flex flex-wrap justify-between ml-[112px] mb-[8rem]">
                <div className="flex flex-col justify-end gap-[2rem] max-w-[592px]">
                    <h2 className="text-[36px] leading-[48px] font-[500]">Nuestra Visión</h2>
                    <p className="text-[20px] leading-[32px]">Es ser reconocidos como líderes en la educación temprana y el cuidado infantil. Nos esforzamos por ser un espacio donde los niños encuentren inspiración, amor por el aprendizaje y confianza en sí mismos. Buscamos ser un recurso valioso para las familias, brindando apoyo, orientación y un ambiente en el que todos se sientan bienvenidos y valorados. Visualizamos un futuro en el que cada niño que ha pasado por nuestra guardería se convierta en un adulto seguro, compasivo y con una base sólida para el éxito en la vida.</p>
                </div>
                <img src="/nosotros_maestra.png" className="max-h-[528px]" alt="maestra enseñando" />
            </div>
            <p className="max-w-[72rem]  h-[96px] text-[36px] leading-[48px] mx-[112px] mb-[8rem] ">Un espacio de aprendizaje y diversión para los pequeños de nuestra guardería</p>
            <div className=" max-w[72rem] flex h-[542px] mx-[112px] mb-[5rem] relative">
                <img src="/nosotros_ninio_armando_casa.png" className="max-h-[504px] absolute bottom-0 left-0" alt="niños armando casa" />
                <h5 className="absolute top-0 right-0 pl-[460.5px] z-10 text-[20px] leading-[32px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.</h5>
                <h5 className="absolute bottom-[20%] right-0 pl-[860px] z-10 text-[20px] leading-[32px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.</h5>
            </div>
            <div className="mx-[112px] max-w[72rem] flex justify-between flex-wrap items-center mb-[8rem]">
                <h4 className="text-[24px] leading-[32px] max-w-[384px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</h4>
                <img src="/nosotros_jardin_playground.png" className="max-w-[384px]" alt="jardin de juegos" />
                <img src="/nosotros_juguetes.png" className="max-w-[384px]" alt="jueguetes" />
            </div>
            <h2 className="text-[36px] leading-[48px] ml-[112px]">Nuestras Tutoras</h2>
            <div className="max-w-[72rem] px-auto min-h-screen">
                    <div className="flex flex-col items-center">
                    </div>
                    <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                        <div className="py-5 w-[1008px]">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src="/nosotros_tutora1.png" className="w-[176px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.C.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Stephany Rodríguez</span>
                                    <span className="transition group-open:rotate-180 border border-black border-solid p-4 rounded-full hover:bg-[#D9D9D9]">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src="/nosotros_tutora2.png" className="w-[176px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.G.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Noemi Pérez</span>
                                    <span className="transition group-open:rotate-180 border border-black border-solid p-4 rounded-full hover:bg-[#D9D9D9]">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src="/nosotros_tutora3.png" className="w-[176px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.J.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Dafne Gómez</span>
                                    <span className="transition group-open:rotate-180 border border-black border-solid p-4 rounded-full hover:bg-[#D9D9D9]">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src="/nosotros_tutora4.png" className="w-[176px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.P.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Ivanna Morales</span>
                                    <span className="transition group-open:rotate-180 border border-black border-solid p-4 rounded-full hover:bg-[#D9D9D9]">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src="/nosotros_tutora5.png" className="w-[176px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.E.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Lucía Ramos</span>
                                    <span className="transition group-open:rotate-180 border border-black border-solid p-4 rounded-full hover:bg-[#D9D9D9]">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>	
                    </div>
                </div>
        </section>
    )
}
export { Nosotros }