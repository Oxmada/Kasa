import starActive from '../assets/star_active.svg';
import starInactive from '../assets/star_inactive.svg';

function HostInfo({ host, rating }) {
    const stars = Array.from({ length: 5 }, (_, i) =>
        i < parseInt(rating) ? starActive : starInactive
    );

    return (
        <div className="host-info">
            <div className="host-header">
                <p className="host-name">{host.name}</p>
                <img className="host-picture" src={host.picture} alt={host.name} />
            </div>
            <div className="host-rating">
                {stars.map((src, i) => (
                    <img key={i} src={src} alt="star" className="star-icon" />
                ))}
            </div>
        </div>
    );
}

export default HostInfo;
