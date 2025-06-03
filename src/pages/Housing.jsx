import { useParams } from 'react-router-dom'
import annonces from '../../annonces.json';
import Carrousel from '../components/Carousel';
import HostInfo from '../components/HostInfo';


function Housing() {
    const { id } = useParams();
    const logement = annonces.find((item) => item.id === id);

    return (
        <div>
            <Carrousel pictures={logement?.pictures || []} />
            <div className='housing-host-infos-container'>
                <div className='housing-infos'>
                    <h1 className='housing-title'>{logement?.title}</h1>
                    <p className='housing-location'>{logement?.location}</p>
                    <div className='tag-container'>
                    </div>
                </div>
                <div className='host-info-container'>
                    <HostInfo host={logement.host} rating={logement.rating} />
                </div>
            </div>
            <div className='housing-dropdown-container'>
            </div>
        </div>
    );
}

export default Housing