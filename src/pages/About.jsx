import Banner from '../components/Banner';
import bannerAbout from '../assets/banner_about.jpg';

function About() {
    return (
        <div>
            <Banner showText={false} image={bannerAbout} alt="Paysage de montagne" opacity={0.3} />
        </div>
    );
}

export default About