import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Painting({ painting, setPaintings, handleAddPainting }) {

    const { id } = useParams()
    const [showStats, setShowStats] = useState(true)   
    const [paint, setPaint] = useState(null)
    
    // const liClass = !gallery ? "" : "in-gallery"

    useEffect(() => {
        if (!painting) {
            fetch(`http://localhost:3000/paintings/${id}`)
                .then(resp => resp.json())
                .then(paintingObj => setPaint(paintingObj))
                .catch(err => alert(err))
        }
    }, [painting, id]);

    const finalPainting = !paint ? painting : paint
    //   console.log(finalPainting)

    if (!finalPainting) {
        return <h3>Loading...</h3>
    }   


    const handleClick = () => {
        setShowStats(currentValue => !currentValue)
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/paintings/${painting.id}`,
            {
                method: "DELETE"
            })
        setPaintings(currentPaintings => currentPaintings.filter(element => element.id !== painting.id))
    }

    const {  num_colors, painting_title, img_src, season, episode, youtube_src, Black_Gesso, Bright_Red, Burnt_Umber, Cadmium_Yellow, Dark_Sienna, Indian_Red, Indian_Yellow, Liquid_Black, Liquid_Clear, Midnight_Black, Phthalo_Blue, Phthalo_Green, Prussian_Blue, Sap_Green, Titanium_White, Van_Dyke_Brown, Yellow_Ochre, Alizarin_Crimson } = finalPainting

    return (
        <li className="cards__item">
            <div className="card" >
                <div className="card__title" >{painting_title}</div>
                {showStats ? (<img className="card__image" src={img_src} alt={painting_title} onClick={handleClick} />) : (
                    <div onClick={handleClick}>
                        <a className="card__detail">Number of Colors: {num_colors}</a>
                        {/* <a className="card__detail">Colors: {colors} </a> */}
                        <ul>
                            <li className="card__detail">{(Black_Gesso) === 1 ? " Black Gesso" : ""} </li>
                            <li className="card__detail">{(Bright_Red) === 1 ? "Bright Red" : ""} </li>
                            <li className="card__detail">{(Burnt_Umber) === 1 ? "Burnt Umber" : ""} </li>
                            <li className="card__detail">{(Cadmium_Yellow) === 1 ? "Cadmium Yellow" : ""} </li>
                            <li className="card__detail">{(Dark_Sienna) === 1 ? "Dark Sienna" : ""} </li>
                            <li className="card__detail">{(Indian_Red) === 1 ? "Indian Red" : ""} </li>
                            <li className="card__detail">{(Indian_Yellow) === 1 ? "Indian Yellow" : ""} </li>
                            <li className="card__detail">{(Liquid_Black) === 1 ? "Liquid Black" : ""} </li>
                            <li className="card__detail">{(Liquid_Clear) === 1 ? "Liquid Clear" : ""} </li>
                            <li className="card__detail">{(Midnight_Black) === 1 ? "Midnight Black" : ""} </li>
                            <li className="card__detail">{(Phthalo_Blue) === 1 ? "Phthalo Blue" : ""} </li>
                            <li className="card__detail">{(Phthalo_Green) === 1 ? "Phthalo Green" : ""} </li>
                            <li className="card__detail">{(Prussian_Blue) === 1 ? "Prussian Blue" : ""} </li>
                            <li className="card__detail">{(Sap_Green) === 1 ? "Sap Green" : ""} </li>
                            <li className="card__detail">{(Titanium_White) === 1 ? "Titanium White" : ""} </li>
                            <li className="card__detail">{(Van_Dyke_Brown) === 1 ? "Van Dyke Brown" : ""} </li>
                            <li className="card__detail">{(Yellow_Ochre) === 1 ? "Yellow Ochre" : ""} </li>
                            <li className="card__detail">{(Alizarin_Crimson) === 1 ? "Alizarin Crimson" : ""} </li>
                        </ul>
                    </div>)}        
                <div className="card__content">
                    <p>
                        <a href={youtube_src} className="card__title">
                        Season: {season} Episode:{episode}
                        </a>
                    </p>
                </div>
                <button className="deleteButton" onClick={handleDelete}>Buy Painting</button>
                <button className="favoriteButton" onClick={handleAddPainting}>Add To Gallery</button>
            </div>
        </li>
    );
}
export default Painting;