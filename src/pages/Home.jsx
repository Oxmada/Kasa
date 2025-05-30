import Banner from '../components/Banner';
import bannerHome from '../assets/banner_home.jpg';
import CardLogement from '../components/CardLogement';

function Home() {
    return (
        <div>
            <Banner showText={true} image={bannerHome} alt="Falaises en bord de mer" opacity={0.6} />
        </div>
    );
}

export default Home
