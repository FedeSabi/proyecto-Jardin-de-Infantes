import PropTypes from "prop-types";

const ClassroomCard = ({ letter, name, ageRange, gapClass }) => (
  <div>
    <div className="flex items-center justify-between">
      <div className={`flex items-center ${gapClass}`}>
        <div className="flex items-center gap-10">
          <span className="text-4xl leading-[48px] tracking-[0.09]">
            {letter}. -
          </span>
          <p className="text-4xl leading-[48px] tracking-[0.09]">{name}</p>
        </div>
        <div>
          <p className="text-lg leading-[32px] tracking-[0.09px]">{ageRange}</p>
        </div>
      </div>
      <button>
        <img src="/classRoomButton.svg" alt="Class Room Button" />
      </button>
    </div>
    <div className="mt-4 h-[1px] w-full bg-[#D9D9D9]"></div>
  </div>
);

ClassroomCard.propTypes = {
  letter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ageRange: PropTypes.string.isRequired,
  gapClass: PropTypes.number, // New prop for controlling the gap
};

export const FacilitieClassroom = () => {
  return (
    <section className="mx-auto mb-[160px] mt-[176px] max-w-[76rem]">
      <h2 className="text-4xl font-semibold leading-[48px] tracking-[0.0px]">
        Nuestras Aulas
      </h2>

      <div className="ml-[104px] mt-[80px] flex flex-col gap-y-10">
        <ClassroomCard
          letter="A"
          name="Aula Oruga"
          ageRange="04 meses a 1 año"
          gapClass="gap-[227px]"
        />
        <ClassroomCard
          letter="B"
          name="Aula Tortuga"
          ageRange="1 a 2 años"
          gapClass="gap-[196px]"
        />
        <ClassroomCard
          letter="C"
          name="Aula Delfines"
          ageRange="2  a 3 años"
          gapClass="gap-[187px]"
        />
        <ClassroomCard
          letter="D"
          name="Aula Panda"
          ageRange="4 a 5 años"
          gapClass="gap-[223px]"
        />
        <ClassroomCard
          letter="E"
          name="Aula Cocodrilo"
          ageRange="6 Años"
          gapClass="gap-[158px]"
        />
        <ClassroomCard letter="F" name="Psicomotricidad" />
      </div>
    </section>
  );
};
