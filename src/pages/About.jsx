import Banner from '../components/Banner';
import bannerAbout from '../assets/banner_about.jpg';
import Dropdown from '../components/Dropdown';

function About() {
    return (
        <div>
            <Banner showText={false} image={bannerAbout} alt="Paysage de montagne" opacity={0.3} />
            <Dropdown title="Fiabilité" content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>} />
            <Dropdown title="Respect" content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>} />
            <Dropdown title="Service" content={<p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>} />
            <Dropdown title="Sécurité" content={<p>La sécurité est la priorté de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>} />
        </div>
    );
}

export default About