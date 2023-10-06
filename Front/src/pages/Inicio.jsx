import { Ratings } from "../components/Ratings";
import { Numbers } from "../components/Numbers";
import { WhyUs } from "../components/WhyUs";
import { Methodologies } from "../components/Methodologies";

const Inicio = () => {
    return (
        <div>
            <Methodologies />
            <WhyUs />
            <Numbers />
            <Ratings />
        </div>
    );
};

export { Inicio };
