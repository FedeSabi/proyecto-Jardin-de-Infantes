import { Header } from "../components/HomeComponents/Header";
import { Highlight } from "../components/HomeComponents/Highlight";
import { Ratings } from "../components/HomeComponents/Ratings";
import { Numbers } from "../components/HomeComponents/Numbers";
import { WhyUs } from "../components/HomeComponents/WhyUs";
import { Methodologies } from "../components/HomeComponents/Methodologies";

const Inicio = () => {
    return (
        <div>
            <Header />
            <Highlight />
            <Methodologies />
            <WhyUs />
            <Numbers />
            <Ratings />
        </div>
    );
};

export { Inicio };
