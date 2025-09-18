import "./styles.scss";
import PitchersJSON from "./deelnemers2025.json";
import PitcherCard from "./PitcherCard/PitcherCard.tsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PitchersCarrousel: React.FunctionComponent = () => {
  const PitchersArray = PitchersJSON as Array<PitcherCard>;

  return (
    <Carousel
      infinite
      responsive={responsive}
      autoPlay
      autoPlaySpeed={8000}
      arrows={false}
      renderButtonGroupOutside
      customButtonGroup={<CarrouselControls />}
      itemClass="px-3"
    >
      {PitchersArray.map((pitch, index) => (
        <PitcherCard key={index} {...pitch} />
      ))}
    </Carousel>
  );
};

export default PitchersCarrousel;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CarrouselControls: React.FC = ({ next, previous }) => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */}
      <button className="carousel-control-prev" onClick={() => previous()}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Vorige</span>
      </button>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */}
      <button className="carousel-control-next" onClick={() => next()}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Volgende</span>
      </button>
    </>
  );
};
