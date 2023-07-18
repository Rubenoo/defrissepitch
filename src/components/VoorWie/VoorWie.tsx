import "./styles.scss";
import Divider from "../Divider/Divider.tsx";

const VoorWie: React.FunctionComponent = () => {
  return (
    <section className="align-items-center">
      <h3>voor wie?</h3>
      <a>
        Iedereen uit de gemeente Zeist mag meedoen!
        <br />
        Het idee moet wel door meerdere initiatiefnemers gedragen worden.
      </a>
      <Divider />
    </section>
  );
};

export default VoorWie;
