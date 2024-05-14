import "./styles.scss";
type PitcherCard = {
  titel: string;
  beschrijving: string;
  afbeelding: string;
};

const PitcherCard: React.FunctionComponent<PitcherCard> = ({
  afbeelding,
  titel,
  beschrijving,
}) => {
  return (
    <article className={"pitcher-card"}>
      <img className="card-image" src={`/assets/images/${afbeelding}`} />
      <h4>{titel}</h4>
      <p>{beschrijving}</p>
    </article>
  );
};

export default PitcherCard;
