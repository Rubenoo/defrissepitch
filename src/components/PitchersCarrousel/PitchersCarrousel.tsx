import "./styles.scss";
import PitchersJSON from "./pitchers.json";
import PitcherCard from "./PitcherCard/PitcherCard.tsx";

const PitchersCarrousel: React.FunctionComponent = () => {
  const PitchersArray = PitchersJSON as Array<PitcherCard>;

  const groups: Array<Array<JSX.Element>> = [];
  PitchersArray.forEach((pitch, index) => {
    if (index % 3 === 0) {
      groups.push([<PitcherCard key={index} {...pitch} />]);
    } else {
      groups[groups.length - 1].push(<PitcherCard key={index} {...pitch} />);
    }
  });

  const pitchersCards = groups.map((group, index) => (
    <div
      key={index}
      className={`carousel-item ${index === 0 && "active"}`}
      data-bs-interval="10000"
    >
      <div className={"card-group"}>{group}</div>
    </div>
  ));

  const pitchersCardsMobile = PitchersArray.map((pitch, index) => (
    <div
      key={index}
      className={`carousel-item ${index === 0 && "active"}`}
      data-bs-interval="10000"
    >
      <PitcherCard key={index} {...pitch} />
    </div>
  ));

  return (
    <>
      <div
        id="pitcherscarrousel"
        className="carousel slide d-lg-block d-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{pitchersCards}</div>
        <CarrouselControls id={"#pitcherscarrousel"} />
      </div>
      <div
        id="pitcherscarrousel-mobile"
        className="carousel slide d-block d-lg-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{pitchersCardsMobile}</div>
        <CarrouselControls id={"#pitcherscarrousel-mobile"} />
      </div>
    </>
  );
};

export default PitchersCarrousel;

type CarrouselControls = { id: string };
const CarrouselControls: React.FC<CarrouselControls> = ({ id }) => (
  <>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target={id}
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Vorige</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target={id}
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Volgende</span>
    </button>
  </>
);
