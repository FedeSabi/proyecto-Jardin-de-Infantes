export const SpaceToLearn = () => {
    return (
        <section className=" relative bg-[#EEE] mt-[18.5rem] py-[210px]">
            <img
                className=" absolute -top-24 w-full"
                src="/space to learn.svg"
                alt="space wave"
            />
            <div className=" relative max-w-[75rem] mx-auto flex">
                <div>
                    <h2 className=" text-4xl font-medium leading-[3rem] tracking-[0.00563rem] mr-[650px]">
                        Un espacio de aprendizaje con pedagóia monterssori y
                        diversión
                    </h2>
                    <p className=" mt-[4.44rem] text-lg leading-8 tracking-[0.00563rem] mr-[610px]">
                        Dentro de nuestro centro algodón de nubes somos
                        conscientes cuando se decide a qué escuela mandar a los
                        más pequeños, se está confiando lo que más se quiere,
                        por eso prestamos el mejor servicio y atención a los
                        niños. Sí hay algo innato en esta edad, son las ganas de
                        descubrir todo lo que la vida les aguarda y desde esta
                        guardería, les ayudamos a hacerlo mediante el juego.
                    </p>
                    <p className=" mt-8 text-lg leading-8 tracking-[0.00563rem] mr-[610px]">
                        Contamos con diferentes aulas atendiendo a la etapa
                        vital que atraviese el pequeño.
                    </p>
                </div>

                <div>
                    <img
                        className=" absolute right-[140px] -top-[75px]"
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
