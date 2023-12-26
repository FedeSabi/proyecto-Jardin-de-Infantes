import { ContactHeader } from "../components/ContactComponent.jsx/ContactHeader";
import ContactForm from "../components/ContactComponent.jsx/ContactForm";
import ContactInformation from "../components/ContactComponent.jsx/ContactInformation";

export const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactInformation />
      <ContactForm />
    </div>
  );
};
