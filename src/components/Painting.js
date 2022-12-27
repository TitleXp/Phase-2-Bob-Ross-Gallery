import { useState } from "react";

function Painting ({ painting }) {

    const [showStats, setShowStats] = useState(true)

    const handleClick = () => {
        setShowStats(currentValue => !currentValue)
    }

    // const paintingColors = painting.colors.toString().toString()

    return (
<li className="cards__item">
    <div className="card" onClick={handleClick}>
            
        <div className="card__title">{painting.painting_title}</div>

            <a href={painting.img_src} ></a>
            {showStats ? (<img className="card__image" src={painting.img_src} alt={painting.painting_title} />) : (
                <>
            <span className="card__detail">Number of Colors: {painting.num_colors}</span>
            <span className="card__detail">Colors: {painting.colors} </span>       
                </>
            )}


            {/* <img onClick={handleClick} 
            src={painting.img_src}
            alt={painting.painting_title}
            className="card__image" 
            />

            <a className="card__detail">Number of Colors: {painting.num_colors}</a>
            <a className="card__detail">Colors: {painting.colors} </a> */}

            <div className="card__content">
                <p><a href={painting.youtube_src} className="card__title">
                    Season: {painting.season} Episode:{painting.episode}
                </a>
                </p>
            </div>
    </div>
    
    


</li>
    );
}
export default Painting;