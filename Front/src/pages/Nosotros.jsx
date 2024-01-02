import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <section className="overflow-x-hidden" id="header">
      <header className="h-[376px] bg-discos bg-cover bg-center">
        <div className="mx-auto flex h-72 max-w-[76rem] pb-[60px] pt-[172px]">
          <h1 className="ml-[112px] text-[58px] font-semibold leading-[72px] text-white">
            Guardería infantil educativo desde Nubes de Algodón
          </h1>
        </div>
      </header>
      <div className="w-232 mx-auto mt-[40px] flex max-w-[76rem] gap-6 px-[112px]">
        <Link className="font-medium text-black hover:text-gray-300" to="/">
          Home
        </Link>
        <p>/</p>
        <p className="text-[#7C858E]">Nosotros</p>
      </div>
      <p className="mx-auto mt-[112px] max-w-[76rem] px-[112px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime porro,
        nisi architecto reprehenderit deleniti excepturi nulla perferendis dicta
        voluptates unde consequuntur necessitatibus? Omnis placeat explicabo
        dicta doloremque qui quo vitae quae ab quos minima tempore, unde fuga
        odit reprehenderit dolorem consequuntur deserunt quod obcaecati! Vitae
        blanditiis aliquid quae fugit quo qui mollitia, in excepturi eveniet
        iste aperiam veritatis neque illo, voluptates accusamus reprehenderit
        eum veniam? Inventore est beatae ullam delectus magnam, aliquam
        quibusdam id corporis soluta.
      </p>
      <img
        src="/nosotros_ninios.png"
        alt="kids playing"
        className="mx-auto mt-[56px] max-w-[76rem] px-[112px]"
      />
      <div className="mx-[auto] mt-[64px] flex max-w-[76rem] justify-end">
        <p className="mr-[112px] h-[96px] w-[592px] text-[20px] font-normal leading-[32px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <div className="mx-auto mt-[144px] flex max-w-[76rem] flex-wrap justify-between">
        <img
          src="/nosotros_mision_ninio.png"
          className="max-h-[528px]"
          alt="niño armando juguete"
        />
        <div className="flex max-w-[592px] flex-col justify-center gap-[2rem]">
          <h2 className="text-[36px] font-[500] leading-[48px]">
            Nuestra Misión
          </h2>
          <p className="text-[20px] leading-[32px]">
            Es crear un entorno seguro, amoroso y estimulante donde cada niño
            pueda florecer. Nos comprometemos a proporcionar una educación
            temprana de calidad que fomente el crecimiento holístico de los
            pequeños. Alentando su curiosidad, creatividad y desarrollo
            socioemocional. Valoramos la individualidad de cada niño y
            trabajamos en estrecha colaboración con las familias para nutrir su
            potencial único. Estamos dedicados a ser un faro de aprendizaje y
            cuidado en la vida de cada niño que pasa por nuestras puertas.
          </p>
        </div>
      </div>
      <div className="mb-[8rem] ml-[112px] flex max-w-[72rem] flex-wrap justify-between">
        <div className="flex max-w-[592px] flex-col justify-end gap-[2rem]">
          <h2 className="text-[36px] font-[500] leading-[48px]">
            Nuestra Visión
          </h2>
          <p className="text-[20px] leading-[32px]">
            Es ser reconocidos como líderes en la educación temprana y el
            cuidado infantil. Nos esforzamos por ser un espacio donde los niños
            encuentren inspiración, amor por el aprendizaje y confianza en sí
            mismos. Buscamos ser un recurso valioso para las familias, brindando
            apoyo, orientación y un ambiente en el que todos se sientan
            bienvenidos y valorados. Visualizamos un futuro en el que cada niño
            que ha pasado por nuestra guardería se convierta en un adulto
            seguro, compasivo y con una base sólida para el éxito en la vida.
          </p>
        </div>
        <img
          src="/nosotros_maestra.png"
          className="max-h-[528px]"
          alt="maestra enseñando"
        />
      </div>
      <p className="mx-[112px]  mb-[8rem] h-[96px] max-w-[72rem] text-[36px] leading-[48px] ">
        Un espacio de aprendizaje y diversión para los pequeños de nuestra
        guardería
      </p>
      <div className=" max-w[72rem] relative mx-[112px] mb-[5rem] flex h-[542px]">
        <img
          src="/nosotros_ninio_armando_casa.png"
          className="absolute bottom-0 left-0 max-h-[504px]"
          alt="niños armando casa"
        />
        <h5 className="absolute right-0 top-0 z-10 pl-[460.5px] text-[20px] leading-[32px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id es.
        </h5>
        <h5 className="absolute bottom-[20%] right-0 z-10 pl-[860px] text-[20px] leading-[32px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id es.
        </h5>
      </div>
      <div className="max-w[72rem] mx-[112px] mb-[8rem] flex flex-wrap items-center justify-between">
        <h4 className="max-w-[384px] text-[24px] leading-[32px]">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit,
        </h4>
        <img
          src="/nosotros_jardin_playground.png"
          className="max-w-[384px]"
          alt="jardin de juegos"
        />
        <img
          src="/nosotros_juguetes.png"
          className="max-w-[384px]"
          alt="jueguetes"
        />
      </div>
      <h2 className="ml-[112px] text-[36px] leading-[48px]">
        Nuestras Tutoras
      </h2>
      <div class="px-auto min-h-screen max-w-[72rem]">
        <div class="flex flex-col items-center"></div>
        <div class="divide-neutral-200 mx-auto mt-8 grid max-w-xl divide-y">
          <div class="w-[1008px] py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span className="relative">
                  <img
                    src="/nosotros_tutora1.png"
                    className="w-[176px]"
                    alt="tutora"
                  />
                  <p className="absolute bottom-0 right-0">A.C.-</p>
                </span>
                <span className="h-[48px] text-[36px] leading-[48px]">
                  {" "}
                  Stephany Rodríguez
                </span>
                <span class="rounded-full border border-solid border-black p-4 transition hover:bg-[#D9D9D9] group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 group-open:animate-fadeIn mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span className="relative">
                  <img
                    src="/nosotros_tutora2.png"
                    className="w-[176px]"
                    alt="tutora"
                  />
                  <p className="absolute bottom-0 right-0">A.G.-</p>
                </span>
                <span className="h-[48px] text-[36px] leading-[48px]">
                  {" "}
                  Noemi Pérez
                </span>
                <span class="rounded-full border border-solid border-black p-4 transition hover:bg-[#D9D9D9] group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 group-open:animate-fadeIn mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span className="relative">
                  <img
                    src="/nosotros_tutora3.png"
                    className="w-[176px]"
                    alt="tutora"
                  />
                  <p className="absolute bottom-0 right-0">A.J.-</p>
                </span>
                <span className="h-[48px] text-[36px] leading-[48px]">
                  {" "}
                  Dafne Gómez
                </span>
                <span class="rounded-full border border-solid border-black p-4 transition hover:bg-[#D9D9D9] group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 group-open:animate-fadeIn mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span className="relative">
                  <img
                    src="/nosotros_tutora4.png"
                    className="w-[176px]"
                    alt="tutora"
                  />
                  <p className="absolute bottom-0 right-0">A.P.-</p>
                </span>
                <span className="h-[48px] text-[36px] leading-[48px]">
                  {" "}
                  Ivanna Morales
                </span>
                <span class="rounded-full border border-solid border-black p-4 transition hover:bg-[#D9D9D9] group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 group-open:animate-fadeIn mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </details>
          </div>
          <div class="py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                <span className="relative">
                  <img
                    src="/nosotros_tutora5.png"
                    className="w-[176px]"
                    alt="tutora"
                  />
                  <p className="absolute bottom-0 right-0">A.E.-</p>
                </span>
                <span className="h-[48px] text-[36px] leading-[48px]">
                  {" "}
                  Lucía Ramos
                </span>
                <span class="rounded-full border border-solid border-black p-4 transition hover:bg-[#D9D9D9] group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="text-neutral-600 group-open:animate-fadeIn mt-3">
                Lorem ipsum dolor sit amet.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Nosotros };
