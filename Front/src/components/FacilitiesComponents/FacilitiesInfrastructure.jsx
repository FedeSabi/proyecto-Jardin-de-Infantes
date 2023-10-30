export const FacilitiesInfrastructure = () => {
  return (
    <section className=" xl:mt-[216px]">
      <div className=" xl:mx-auto xl:flex xl:max-w-[76rem] xl:items-center xl:justify-between">
        <div className=" xl:w-[487px]">
          <h2 className=" xl:text-4xl xl:font-medium xl:leading-[48px] xl:tracking-[0.09px]">
            Infraestructura y espacios de aprendizaje atractivos{" "}
          </h2>
          <p className=" xl:mt-6 xl:text-xl xl:font-normal xl:leading-[32px] xl:tracking-[0.1px]">
            Dispone de 350 m2 de instalaciones diseñadas específicamente para el
            cuidado, la atención y la educación de los niños: equipamiento,
            habitabilidad de las aulas, seguridad e higiene y espacios abiertos,
            con grandes ventanales, que permiten unas condiciones óptimas para
            los alumnos.
          </p>
        </div>

        <div className=" xl:flex xl:w-[631px] xl:gap-8">
          <img
            className=" xl:mt-auto xl:h-[480px] xl:w-[280px]"
            src="/Infrastructure-1.png"
            alt="Infrastructure 1"
          />
          <img
            className=" xl:h-[568px] xl:w-[319px]"
            src="/Infrastructure-2.png"
            alt="Infrastructure 2"
          />
        </div>
      </div>

      <div className=" mx-auto mt-10 flex max-w-[76rem] gap-[110px]">
        <div>
          <span className=" text-[90px] ">100 +</span>
          <p className=" text-xl leading-[32px] tracking-[0.1px]">
            Lorem impsu
          </p>
        </div>

        <div>
          <span className=" text-[90px] ">100 +</span>
          <p className=" text-xl leading-[32px] tracking-[0.1px]">
            Lorem impsu
          </p>
        </div>
      </div>

      <div className=" mx-auto mt-[120px] max-w-[76rem]">
        <div className=" flex gap-8">
          <img
            className=" h-[280px] w-[488px]"
            src="/Infrastructure-3.png"
            alt="Infrastructure 3"
          />
          <img
            className=" h-[224px] w-[384px]"
            src="/Infrastructure-4.png"
            alt="Infrastructure 4"
          />
          <p className=" mt-6 text-xl leading-[32px] tracking-[0.1px]">
            Estamos tan seguros de dar la mejor atención a vuestros hijos
          </p>
        </div>
        <p className=" mt-16 mr-[660px]">
          Dispone de 350 m2 de instalaciones diseñadas específicamente para el
          cuidado, la atención y la educación de los niños: equipamiento.
        </p>
      </div>
    </section>
  );
};
