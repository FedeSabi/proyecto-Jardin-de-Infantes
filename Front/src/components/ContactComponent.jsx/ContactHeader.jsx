export const ContactHeader = () => {
  return (
    <header id="header">
      <div className=" mx-auto mt-[264px] flex max-w-[76rem] items-center gap-[153px]">
        <div className=" w-[488px]">
          <span className=" leading-[24px] tracking-[0.08px]">Contacto</span>
          <h1 className=" mt-4 text-4xl font-medium leading-[48px] tracking-[0.09px]">
            Contáctanos y solicita más información
          </h1>
          <p className=" mt-4 text-lg leading-[32px] tracking-[0.09px]">
            Dentro de nuestro centro algodón de nubes somos conscientes cuando
            se decide a qué escuela mandar a los más pequeños, se está confiando
            lo que más se quiere.
          </p>

          <div className=" mt-[56px] flex flex-col gap-4">
            <div className="flex items-center gap-8 ">
              <img src="/contact_icon.svg" alt="contact icon" />
              <p>Dirección</p>
            </div>

            <div className="flex items-center gap-8 ">
              <img src="/contact_icon.svg" alt="contact icon" />
              <p>Número de Teléfono</p>
            </div>

            <div className="flex items-center gap-8 ">
              <img src="/contact_icon.svg" alt="contact icon" />
              <p>Email</p>
            </div>
          </div>

          <div className="mt-16 ">
            <h2 className=" font-semibold leading-8 tracking-[0.1px]">
              Horario de Atención:
            </h2>
            <div className="mt-2 ">
              <p className=" text-xl leading-8 tracking-[0.1px]">
                Lunes a Viernes
              </p>
              <p className=" text-xl leading-8 tracking-[0.1px]">
                08:00 am - 12:30 pm / 2:00 pm - 6:00 pm
              </p>
            </div>
          </div>
        </div>

        <div className=" h-[585px] w-[560px]">
          <img className="w-full " src="/Contact_img.png" alt="Contact image" />
        </div>
      </div>
    </header>
  );
};
