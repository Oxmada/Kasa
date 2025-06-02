import { useParams } from 'react-router-dom'
import annonces from '../../annonces.json';
import Carrousel from '../components/Carousel';


function Housing() {
    const { id } = useParams();
    const logement = annonces.find((item) => item.id === id);

    return (
        <div>
            <Carrousel pictures={logement?.pictures || []} />
            <h1 className='housing-title'>{logement?.title}</h1>
            <p className='housing-location'>{logement?.location}</p>
        </div>
    );
}

export default Housing