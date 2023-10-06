export const WhyUs = () => {
    return (
        <section className=" bg-[#F5F5F5] xl:py-[90px]">
            <div className=" max-w-screen-xl mx-auto xl:flex xl:items-center xl:justify-center xl:gap-[6.94rem]">
                <div className=" w-2/5">
                    <img className=" w-full" src="/boy.svg" alt="boy" />
                </div>
                <div className=" w-3/5">
                    <div className="  xl:flex xl:flex-col xl:gap-[1.5rem]">
                        <h2 className=" xl:text-4xl xl:font-medium xl:leading-[3rem] xl:tracking-[0.00563rem] xl:mr-[300px]">
                            ¿Por qué elegir Nubes de Algodón?
                        </h2>
                        <p className=" xl:text-lg xl:leading-8 xl:tracking-[0.00625rem] xl:mr-[167px]">
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            ma Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id
                            es. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam,
                            nisi ut al
                        </p>
                    </div>

                    <button className=" bg-black text-white w-[17.5rem] py-[1rem] rounded-full mt-16 text-left flex justify-center items-center gap-6">
                        Saber más
                        <div className=" bg-white right-0 top-[200px] rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
                            <img
                                src="/Alt Arrow Right.svg"
                                alt="Alt Arrow Right"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};
