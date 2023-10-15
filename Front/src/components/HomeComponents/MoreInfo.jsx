export const MoreInfo = () => {
    return (
        <section className=" bg-[#F5F5F5]">
            <div className=" max-w-[75rem] mx-auto pb-[20.81rem] py-40 text-center">
                <h2 className=" text-4xl leading-[3rem] tracking-[0.00563rem] mx-[250px]">
                    Elige la mejor y haz que tu hijo desarrolle su inteligencia.
                </h2>
                <p className=" mt-4 text-xl leading-[2rem] tracking-[0.00625rem]">
                    Solicita información para su admisión
                </p>
                <div className=" flex justify-center">
                    <button className=" bg-black text-white w-[17.5rem] py-[1rem] rounded-full mt-12 text-left flex justify-center items-center gap-6">
                        Solicitar ahora
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
