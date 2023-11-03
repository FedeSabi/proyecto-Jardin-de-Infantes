export const MoreInfo = () => {
  return (
    <section className=" overflow-hidden bg-[#F5F5F5]">
      <div className=" mx-auto max-w-[76rem] py-40 pb-[20.81rem] text-center">
        <h2 className=" mx-[250px] text-4xl leading-[3rem] tracking-[0.00563rem]">
          Elige la mejor y haz que tu hijo desarrolle su inteligencia.
        </h2>
        <p className=" mt-4 text-xl leading-[2rem] tracking-[0.00625rem]">
          Solicita información para su admisión
        </p>
        <div className=" flex justify-center">
          <button className=" mt-12 flex w-[17.5rem] items-center justify-center gap-6 rounded-full bg-black py-[1rem] text-left text-white">
            Solicitar ahora
            <div className=" right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img src="/Alt Arrow Right.svg" alt="Alt Arrow Right" />
            </div>
          </button>
        </div>
      </div>

      <div className=" relative">
        <img
          className=" absolute bottom-0 w-full"
          src="/moreInfoWave.svg"
          alt="more info wave"
        />
      </div>
    </section>
  );
};
