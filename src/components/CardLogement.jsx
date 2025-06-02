import data from "../../annonces.json";
import { Link } from 'react-router-dom';

function CardLogement() {
    return (
        <div className="card-container">
            {data.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id} className="card-logement-link">
                    <div className="card-logement">
                        <img src={logement.cover} alt={logement.title} />
                        <h3>{logement.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default CardLogement;
