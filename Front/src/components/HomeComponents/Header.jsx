export const Header = () => {
  return (
    <section className=" relative bg-[#BFBFBF] pb-[100px]">
      <div className=" mx-auto flex max-w-[75rem] gap-[55px]">
        <div className=" w-3/5">
          <h1 className=" mt-[208px] text-5xl font-medium leading-[56px] tracking-[0.12px]">
            Educación Temprana, cuidado y aprendizaje en un ambiente de alegría
          </h1>
          <p className=" mr-[4rem] mt-4 text-xl leading-8 tracking-[0.1px]">
            Nuestra guardería ofrece un mundo de aprendizaje y descubrimiento.
            Solicita una admisión y únete a nosotros para darle a tu hijo la
            mejor experiencia educativa.
          </p>

          <button className=" mt-8 flex w-[17.5rem] items-center justify-center gap-6 rounded-full bg-black py-[1rem] text-left text-white">
            Saber más
            <div className=" right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img src="/Alt Arrow Right.svg" alt="Alt Arrow Right" />
            </div>
          </button>
        </div>

        <div className=" relative mt-[128px] w-2/5">
          <img src="/home_img_hero.png" alt="home img hero" />

          <img
            className=" absolute top-0 rounded-[32.125rem] blur-[118px]"
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

      <button>
        <img
          className=" absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 transform"
          src="/button down.svg"
          alt="button to services"
        />
      </button>
    </section>
  );
};
