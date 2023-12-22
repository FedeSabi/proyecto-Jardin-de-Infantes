import { useState } from "react";
import axios from "axios";



export const AdmissionForm = () => {
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [genero, setgenero] = useState(""); 
  const [nacimiento, setnacimiento] = useState("");
  const [nivel, setnivel] = useState("");
  const [nombreTutor, setnombreTutor] = useState("");
  const [telefono, settelefono] = useState("");
  const [email, setemail] = useState("");
  const [aceptoPoliticaPrivacidad, setAceptoPoliticaPrivacidad] =
    useState(false);
    const [enviado, setEnviado] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!aceptoPoliticaPrivacidad) {
        alert("Debes aceptar la Política de Privacidad para enviar el formulario.");
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:3000/registro', {
          nombre,
          apellido,
          genero,
          nacimiento,
          nombreTutor,
          telefono,
          email,
          nivel,
        });
  
        console.log('Respuesta del servidor:', response.data);
  
        setEnviado(true);
        setMensaje("¡Formulario enviado con éxito!");
  
        setnombre("");
        setapellido("");
        setgenero("");
        setnacimiento("");
        setnombreTutor("");
        settelefono("");
        setemail("");
        setnivel("");
        
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        setMensaje("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
      }
    };
    

  return (
    <section className=" mx-auto mb-[288px] mt-[124px] max-w-[76rem]">
      <div className=" flex items-center gap-[136px]">
        <div className=" w-[592px]">
          <h3 className=" text-2xl font-medium leading-[32px] tracking-[0.084px]">
            Completa el formulario
          </h3>
          {enviado && (
            <div className={`mt-4 ${mensaje.includes("éxito") ? "text-green-600" : "text-red-600"} font-semibold`}>{mensaje}</div>
          )}

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
                onChange={(e) => setnombre(e.target.value)}
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
                onChange={(e) => setapellido(e.target.value)}
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
                  onChange={(e) => setgenero(e.target.value)}
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
                  value={nacimiento}
                  onChange={(e) => setnacimiento(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className=" flex w-[280px] flex-col gap-2">
              <label htmlFor="nivelEducacion">Nivel de Educación:</label>
              <select
                className=" h-10 rounded-[5px] border border-[#D9D9D9] px-2"
                id="nivelEducacion"
                value={nivel}
                onChange={(e) => setnivel(e.target.value)}
                required
              >
                <option value="">Selecciona el nivel de educación</option>
                <option value="cuna">Cuna</option>
                <option value="jardin">Jardin</option>
                <option value="guarderia">Guarderia</option>
                <option value="E.temprana">E.temprana</option>
                <option value="talleres">Talleres</option>
                <option value="cocina">Cocina</option>
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
                onChange={(e) => setnombreTutor(e.target.value)}
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
                  value={telefono}
                  onChange={(e) => settelefono(e.target.value)}
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
                  onChange={(e) => setemail(e.target.value)}
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
            <button
        className=" mt-[68px] w-[592px] rounded-full bg-black py-4 text-white"
        type="submit"
      >
        Solicitar admisión
      </button>
          </form>
         
        </div>
        <div className=" h-[542px] w-[488px]">
          <img src="/formimg.png" alt="smiling baby" />
        </div>
      </div>
     
    </section>
  );
};
