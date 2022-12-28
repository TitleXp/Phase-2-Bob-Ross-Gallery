import { useState } from "react";

function Painting ({ painting, setPaintings }) {

    const [showStats, setShowStats] = useState(true)

    const handleClick = () => {
        setShowStats(currentValue => !currentValue)
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/paintings/${painting.id}`,
        {
            method: "DELETE"
        })
        setPaintings(currentPaintings => currentPaintings.filter(painting => painting.id !== painting.id))
    }


    return (
<li className="cards__item">
    <div className="card" >
            
        <div className="card__title" >{painting.painting_title}</div>
            {showStats ? (<img className="card__image" src={painting.img_src} alt={painting.painting_title} onClick={handleClick}/>) : (
                <div onClick={handleClick}>
            <a className="card__detail">Number of Colors: {painting.num_colors}</a>
            <a className="card__detail">Colors: {painting.colors} </a>       
                </div>
            )}

            <div className="card__content">
                <p><a href={painting.youtube_src} className="card__title">
                    Season: {painting.season} Episode:{painting.episode}
                </a>
                </p>
            </div>
            <button className="card__content" onClick={handleDelete}>x</button>
    </div>
    
    


</li>
    );
}
export default Painting;