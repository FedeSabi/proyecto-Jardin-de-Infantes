import { FacilitiesHeader } from "../components/FacilitiesComponents/FacilitiesHeader";
import { FacilitiesInfrastructure } from "../components/FacilitiesComponents/FacilitiesInfrastructure";
import { FacilitieClassroom } from "../components/FacilitiesComponents/FacilitieClassroom";

export const Facilities = () => {
  return (
    <div>
      <FacilitiesHeader />
      <FacilitiesInfrastructure />
      <FacilitieClassroom />
    </div>
  );
};
