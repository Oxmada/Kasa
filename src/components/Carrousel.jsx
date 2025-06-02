import { useState } from "react";
import GrandChevron from "../assets/grand_chevron.svg";

function Carousel({ pictures }) {
    const total = pictures.length;
    const [current, setCurrent] = useState(0);

    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

    if (total < 1) return null;

    return (
        <div className="carousel">
            <img
                src={pictures[current]}
                alt={`slide ${current + 1}`}
                className="carousel-image"
            />

            {total > 1 && (
                <>
                    <button className="carousel-arrow left" onClick={prevSlide}>
                        <img src={GrandChevron} alt="Précédent" />
                    </button>
                    <button className="carousel-arrow right" onClick={nextSlide}>
                        <img src={GrandChevron} alt="Suivant" />
                    </button>
                    <div className="carousel-counter">
                        {current + 1}/{total}
                    </div>
                </>
            )}
        </div>
    );
}

export default Carousel;

