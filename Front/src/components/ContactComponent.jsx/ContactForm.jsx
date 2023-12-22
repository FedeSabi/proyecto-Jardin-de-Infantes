import { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      email: "",
      celular: "",
      mensaje: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server or perform some action.
    console.log("Form data submitted:", this.state);
  };

  render() {
    return (
      <div className=" mx-auto mb-[160px] mt-[128px] w-[76rem] rounded-2xl bg-[#F5F5F5] pb-[125px] pt-[141px]">
        <form
          className=" mx-auto flex w-[592px] flex-col gap-8"
          onSubmit={this.handleSubmit}
        >
          <div className=" flex flex-col">
            <label className=" hidden" htmlFor="nombre">
              Nombre
            </label>
            <input
              className=" border-b border-[#D9D9D9] bg-[#F5F5F5] pb-4 pl-[20.62px] outline-none placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E]"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
            />
          </div>
          <div className=" flex flex-col">
            <label className=" hidden" htmlFor="email">
              Email
            </label>
            <input
              className=" border-b border-[#D9D9D9] bg-[#F5F5F5] pb-4 pl-[20.62px] outline-none placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E]"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className=" flex flex-col">
            <label className=" hidden" htmlFor="celular">
              N° de Celular
            </label>
            <input
              className=" border-b border-[#D9D9D9] bg-[#F5F5F5] pb-4 pl-[20.62px] outline-none placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E]"
              type="tel"
              id="celular"
              name="celular"
              placeholder="N° de Celular"
              value={this.state.celular}
              onChange={this.handleChange}
            />
          </div>
          <div className=" flex flex-col">
            <label className=" hidden" htmlFor="mensaje">
              Deje su mensaje aquí
            </label>
            <textarea
              className=" border-b border-[#D9D9D9] bg-[#F5F5F5] pb-[148px] pl-[20.62px] outline-none placeholder:text-[13px] placeholder:leading-4 placeholder:text-[#7C858E]"
              id="mensaje"
              name="mensaje"
              placeholder="Deje su mensaje aquí"
              value={this.state.mensaje}
              onChange={this.handleChange}
            />
          </div>
          <div className=" flex justify-end">
            <button
              className=" mt-[22px] h-10 w-[141.934px] rounded-lg bg-black text-[16px] leading-6 tracking-[0.08px] text-[#FFF]"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
