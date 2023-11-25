import { useState } from "react";

export const AdmissionForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [genero, setGenero] = useState(""); // Nuevo campo de género
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [nivelEducacion, setNivelEducacion] = useState("");
  const [nombreTutor, setNombreTutor] = useState("");
  const [telefonoContacto, setTelefonoContacto] = useState("");
  const [email, setEmail] = useState("");
  const [aceptoPoliticaPrivacidad, setAceptoPoliticaPrivacidad] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aceptoPoliticaPrivacidad) {
      alert(
        "Debes aceptar la Política de Privacidad para enviar el formulario.",
      );
      return;
    }
    // Aquí puedes realizar la lógica para enviar los datos del formulario a través de una API o realizar otras acciones necesarias.
    console.log("Formulario enviado:", {
      nombre,
      apellido,
      genero,
      fechaNacimiento,
      nombreTutor,
      telefonoContacto,
      email,
    });
  };

  return (
    <section className=" mx-auto mb-[288px] mt-[124px] max-w-[76rem]">
      <div className=" flex items-center gap-[136px]">
        <div className=" w-[592px]">
          <h3 className=" text-2xl font-medium leading-[32px] tracking-[0.084px]">
            Completa el formulario
          </h3>

          <form className=" mt-11 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className=" flex flex-col gap-2">
              <label className=" leading-6 tracking-[0.08px]" htmlFor="nombre">
                Nombre del aspirante:
              </label>
              <input
                className=" h-10 w-full rounded-[5px] border border-[#D9D9D9] pl-[20px] placeholder:text-[13px] focus:outline-none"
                type="text"
                id="nombre"
                value={nombre}
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className=" flex flex-col gap-2">
              <label
                className=" leading-6 tracking-[0.08px]"
                htmlFor="apellido"
              >
                Apellido del aspirante:
              </label>
              <input
                className=" h-10 w-full rounded-[5px] border border-[#D9D9D9] pl-[20px] placeholder:text-[13px] focus:outline-none"
                type="text"
                id="apellido"
                value={apellido}
                placeholder="Apellido"
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>

            <div className=" flex gap-8">
              <div className=" flex w-full flex-col gap-2">
                <label htmlFor="genero">Género:</label>
                <select
                  className=" h-10 w-full rounded-[5px] border border-[#D9D9D9] px-2"
                  id="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                  required
                >
                  <option value="">Selecciona el género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className=" flex w-full flex-col gap-2">
                <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                <input
                  className=" h-10 w-full rounded-[5px] border border-[#D9D9D9] p-2"
                  type="date"
                  id="fechaNacimiento"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className=" flex w-[280px] flex-col gap-2">
              <label htmlFor="nivelEducacion">Nivel de Educación:</label>
              <select
                className=" h-10 rounded-[5px] border border-[#D9D9D9] px-2"
                id="nivelEducacion"
                value={nivelEducacion}
                onChange={(e) => setNivelEducacion(e.target.value)}
                required
              >
                <option value="">Selecciona el nivel de educación</option>
                <option value="preescolar">Preescolar</option>
                <option value="primaria">Primaria</option>
                <option value="secundaria">Secundaria</option>
              </select>
            </div>

            <div className=" flex w-full flex-col gap-2">
              <label htmlFor="nombreTutor">Nombre del tutor legal:</label>
              <input
                className=" h-10 w-full rounded-[5px] border border-[#D9D9D9] pl-[20px] placeholder:text-[13px] focus:outline-none"
                type="text"
                id="nombreTutor"
                value={nombreTutor}
                placeholder=" Nombre del tutor legal"
                onChange={(e) => setNombreTutor(e.target.value)}
                required
              />
            </div>

            <div className=" flex gap-8">
              <div className=" flex w-full flex-col gap-2">
                <label htmlFor="telefonoContacto">Teléfono de contacto:</label>
                <input
                  className=" h-10 w-full rounded-[5px] border border-[#D9D9D9] px-2"
                  type="tel"
                  id="telefonoContacto"
                  value={telefonoContacto}
                  onChange={(e) => setTelefonoContacto(e.target.value)}
                  required
                />
              </div>

              <div className=" flex w-full flex-col gap-2">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  className=" h-10 w-full rounded-[5px] border border-[#D9D9D9] px-2"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className=" flex items-center gap-2 text-[13px] text-[#7C858E]">
                <input
                  className=" h-6 w-6"
                  type="checkbox"
                  checked={aceptoPoliticaPrivacidad}
                  onChange={() =>
                    setAceptoPoliticaPrivacidad(!aceptoPoliticaPrivacidad)
                  }
                />
                He leído y acepto la
                <span className=" text-[13px] font-medium text-black">
                  Política de Privacidad
                </span>
              </label>
            </div>
          </form>
        </div>
        <div className=" h-[542px] w-[488px]">
          <img src="/formimg.png" alt="smiling baby" />
        </div>
      </div>
      <button
        className=" mt-[68px] w-[592px] rounded-full bg-black py-4 text-white"
        type="submit"
      >
        Solicitar admisión
      </button>
    </section>
  );
};
