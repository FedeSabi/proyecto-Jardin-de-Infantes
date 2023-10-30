export const SpaceToLearn = () => {
  return (
    <section className=" relative mt-[18.5rem] bg-[#EEE] py-[210px]">
      <img
        className=" absolute -top-24 w-full"
        src="/space to learn.svg"
        alt="space wave"
      />
      <div className=" relative mx-auto flex max-w-[76rem]">
        <div>
          <h2 className=" mr-[665px] text-4xl font-medium leading-[3rem] tracking-[0.00563rem]">
            Un espacio de aprendizaje con pedagóia monterssori y diversión
          </h2>
          <p className=" mr-[610px] mt-[4.44rem] text-lg leading-8 tracking-[0.00563rem]">
            Dentro de nuestro centro algodón de nubes somos conscientes cuando
            se decide a qué escuela mandar a los más pequeños, se está confiando
            lo que más se quiere, por eso prestamos el mejor servicio y atención
            a los niños. Sí hay algo innato en esta edad, son las ganas de
            descubrir todo lo que la vida les aguarda y desde esta guardería,
            les ayudamos a hacerlo mediante el juego.
          </p>
          <p className=" mr-[610px] mt-8 text-lg leading-8 tracking-[0.00563rem]">
            Contamos con diferentes aulas atendiendo a la etapa vital que
            atraviese el pequeño.
          </p>
        </div>

        <div>
          <img
            className=" absolute -top-[75px] right-[140px]"
            src="/spaceFig1.svg"
            alt="space figure 1"
          />
          <img
            className=" absolute right-[2px] top-[160px]"
            src="/spaceFig2.svg"
            alt="space figure 2"
          />
          <img
            className=" absolute right-[2px] top-[368px]"
            src="/spaceFig3.svg"
            alt="space figure 3"
          />
          <img
            className=" absolute right-[2px] top-[600px]"
            src="/spaceFig4.svg"
            alt="space figure 4"
          />
        </div>
      </div>
    </section>
  );
};
