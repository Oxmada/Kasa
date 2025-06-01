import data from "../../annonces.json";

function CardLogement() {
    return (
        <div className="card-container">
            {data.map((logement) => (
                <div className="card-logement" key={logement.id}>
                    <img src={logement.cover} alt={logement.title} />
                    <h3>{logement.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default CardLogement;
