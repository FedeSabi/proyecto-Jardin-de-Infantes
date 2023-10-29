export const WhyUs = () => {
  return (
    <section className=" bg-[#F5F5F5] xl:py-[90px]">
      <div className="  mx-auto max-w-[75rem] xl:flex xl:items-center xl:justify-center xl:gap-[6.94rem]">

        <div className=" w-[613px;]">
          <img className=" w-full" src="/boy.svg" alt="boy" />
        </div>

        <div className=" w-[592px]">
          <div className=" xl:flex xl:flex-col xl:gap-[1.5rem]">
            <h2 className=" xl:mr-[140px] xl:text-4xl xl:font-medium xl:leading-[3rem] xl:tracking-[0.00563rem]">
              ¿Por qué elegir Nubes de Algodón?
            </h2>
            <p className=" xl:text-lg xl:leading-8 xl:tracking-[0.00625rem]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur ma Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id es. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut al
            </p>
          </div>

          <button className=" mt-16 flex w-[17.5rem] items-center justify-center gap-6 rounded-full bg-black py-[1rem] text-left text-white">
            Saber más
            <div className=" right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-white">
              <img src="/Alt Arrow Right.svg" alt="Alt Arrow Right" />
            </div>
          </button>
        </div>
        
      </div>
    </section>
  );
};
