export const Ratings = () => {
    return (
        <section className=" px-4 xl:px-0 pt-[80px] pb-[232px] xl:pb-[54px] mb-[184px] bg-[#F5F5F5] xl:text-center">
            <div className=" max-w-screen-lg mx-auto z-10">
                <h2 className=" text-[32px] font-semibold leading-[42px] tracking-[0.075px] text-center xl:mx-[260px]">
                    Lo que están diciendo los papás acerca de Nosotros
                </h2>
                <p className=" mt-8 text-lg leading-[32px] tracking-[0.09px] xl:mx-18">
                    Quisque egestas ipsum vitae erat faucibus, non volutpat arcu
                    faucibus. Phasellus auctor sed ligula in bibendum. Maecenas
                    vel ultrices nulla. Aliquam nunc nulla, consectetur quis
                    varius eget, tempor a nisi. Integer hendrerit viverra enim,
                    in mattis purus fermentum et. Quisque sit amet enim a arcu
                    euismod dapibus eget sit amet est.
                </p>
            </div>

            <div className=" text-center xl:mt-[136px]">
                <div className=" mb-[18px]">
                    <p className=" text-lg font-semibold leading-[32px] tracking-[0.09px]">
                        Noah Emma
                    </p>
                    <p className=" text-sm leading-4">Madre de henry</p>
                </div>

                <ul className=" flex items-center justify-center gap-2">
                    <li>
                        <i className="fa-solid fa-star text-[#7C858E]"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star text-[#7C858E]"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star text-[#7C858E]"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star text-[#7C858E]"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star text-[#7C858E]"></i>
                    </li>
                </ul>
            </div>

            <div className=" relative max-w-screen-lg mx-auto">
                <img
                    className="hidden xl:block absolute right-[50px] bottom-[40px] z-10"
                    src="/ArrowNoah.svg"
                    alt="ArrowNoah"
                />
                <img
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-50 xl:-bottom-[150px] lg:left-auto lg:right-0 xl:translate-x-[50px]"
                    src="/Rectangle 60.png"
                    alt="Rectangle"
                />
            </div>
        </section>
    );
};
