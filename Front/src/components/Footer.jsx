const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="px-4 pb-4 xl:px-0 xl:pb-[80px]">
            <div className=" hidden xl:block h-[1px] w-full bg-[#EEEEEE] my-6"></div>

            <div className=" relative xl:flex xl:gap-[168px] xl:py-[80px] max-w-screen-xl mx-auto">
                <button className=" bg-black absolute right-0 top-[200px] rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
                    <img src="/Alt Arrow Up.svg" alt="Alt Arrow Up" />
                </button>
                <div className=" xl:w-[353px]">
                    <h2 className=" text-2xl font-bold leading-8 mr-[202px] xl:mr-0">
                        Nubes de algodón
                    </h2>
                    <p className=" text-lg leading-8 mt-4 mr-[45px] xl:mr-0">
                        Quisque egestas ipsum vitae erat faucibus, non volutpat
                        arcu faucibus. Phasellus auctor sed ligula.
                    </p>
                </div>

                <div className=" xl:flex xl:gap-[88px]">
                    <div className="line"></div>

                    <div>
                        <h3 className=" mb-4 font-medium tracking-[0.08px]">
                            Acerca de Nosotros
                        </h3>
                        <ul>
                            <li>
                                <a className=" footerLinks" href="#">
                                    ¿Quiénes somos?
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Precios
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Aulas
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="line"></div>

                    <div>
                        <h3 className=" mb-4 font-medium tracking-[0.08px]">
                            Servicios
                        </h3>
                        <ul>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Cunas
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Guardería
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Jardín
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Escuela de Padres
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Taller
                                </a>
                            </li>
                            <li>
                                <a className=" footerLinks" href="#">
                                    Cocina
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="line"></div>

                    <div>
                        <h3 className=" mb-4 font-medium tracking-[0.08px]">
                            Síguenos
                        </h3>
                        <ul className=" flex gap-x-3 mt-4">
                            <li className="bg-black text-white rounded-full">
                                <a
                                    href="#"
                                    className="h-[2rem] w-[2rem] flex items-center justify-center">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>

                            <li className="bg-black text-white rounded-full">
                                <a
                                    href="#"
                                    className="h-[2rem] w-[2rem] flex items-center justify-center">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>

                            <li className="bg-black text-white rounded-full">
                                <a
                                    href="#"
                                    className="h-[2rem] w-[2rem] flex items-center justify-center">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="line"></div>

            <div className="w-full max-w-screen-xl mx-auto xl:flex xl:items-center xl:justify-between xl:mt-[100px]">
                <span className="text-[#7C858E] sm:text-center">
                    Copyright © {currentYear} Kids by johnnathandesigner. All
                    Rights Reserved.
                </span>
                <ul className="flex justify-between xl:gap-[52px] items-center text-[#7C858E] mt-[40px] xl:mt-0">
                    <li>
                        <a href="#">Aviso legal</a>
                    </li>
                    <li>
                        <a href="#">Política de Privacidad</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export { Footer };
