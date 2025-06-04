function Banner({ showText = true, image, alt, opacity = 1 }) {
    return (
        <div className="banner">
            <img src={image} alt={alt} className="banner-img" />
            <div
                className="banner-overlay"
                style={{ backgroundColor: `rgba(0,0,0,${opacity})` }}
            />
            {showText && (
                <h1 className="banner-text">
                    Chez vous,<span className="responsive-break"> partout et ailleurs</span>
                </h1>
            )}
        </div>
    );
}

export default Banner;