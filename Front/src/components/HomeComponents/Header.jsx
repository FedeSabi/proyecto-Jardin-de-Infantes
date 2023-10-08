export const Header = () => {
    return (
        <section className=" relative bg-[#BFBFBF] pb-[100px]">
            <div className=" max-w-[75rem] mx-auto flex gap-[55px]">
                <div className=" w-3/5">
                    <h1 className=" text-5xl font-medium leading-[56px] tracking-[0.12px] mt-[208px]">
                        Educación Temprana, cuidado y aprendizaje en un ambiente
                        de alegría
                    </h1>
                    <p className=" text-xl leading-8 tracking-[0.1px] mt-4 mr-[4rem]">
                        Nuestra guardería ofrece un mundo de aprendizaje y
                        descubrimiento. Solicita una admisión y únete a nosotros
                        para darle a tu hijo la mejor experiencia educativa.
                    </p>

                    <button className=" bg-black text-white w-[17.5rem] py-[1rem] rounded-full mt-8 text-left flex justify-center items-center gap-6">
                        Saber más
                        <div className=" bg-white right-0 top-[200px] rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
                            <img
                                src="/Alt Arrow Right.svg"
                                alt="Alt Arrow Right"
                            />
                        </div>
                    </button>
                </div>

                <div className=" relative mt-[128px] w-2/5">
                    <img src="/home_img_hero.png" alt="home img hero" />

                    <img
                        className=" absolute top-0 blur-[118px] rounded-[32.125rem]"
                        src="/header_girl_bg.svg"
                        alt="header_girl_bg"
                    />
                </div>
            </div>

            <img
                className=" absolute bottom-0 w-full"
                src="/header_wave.svg"
                alt="header wave"
            />
        </section>
    );
};
