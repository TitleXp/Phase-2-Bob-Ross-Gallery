import { useState } from "react";

function MyPainting({setPaintings, mypainting, setMyPaintings }) {

    const [showStats, setShowStats] = useState(true)   
    
    const handleClick = () => {
        setShowStats(currentValue => !currentValue)
    }

    const handleDelete = () => { 
        // console.log("handling delete")
        fetch(`http://localhost:3000/paintings`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mypainting)
        })
        .then(response => response.json())
        .then(paintingObj => setPaintings(currentVal => [paintingObj, ...currentVal]))
        .catch(error => alert(error))

        fetch(`http://localhost:3000/gallery/${mypainting.id}`,
            {
                method: "DELETE"
            })
        setMyPaintings(currentPaintings => currentPaintings.filter(element => element.id !== mypainting.id))
    }

    if(!mypainting) {
       return <h2>Loading... </h2>
    }
    const {  num_colors, painting_title, img_src, season, episode, youtube_src, Black_Gesso, Bright_Red, Burnt_Umber, Cadmium_Yellow, Dark_Sienna, Indian_Red, Indian_Yellow, Liquid_Black, Liquid_Clear, Midnight_Black, Phthalo_Blue, Phthalo_Green, Prussian_Blue, Sap_Green, Titanium_White, Van_Dyke_Brown, Yellow_Ochre, Alizarin_Crimson } = mypainting

    return (
        <li className="cards__item">
            <div className="card" >
                <div className="card__title" >{painting_title}</div>
                {showStats ? (<img className="card__image" src={img_src} alt={painting_title} onClick={handleClick} />) : (
                    <div onClick={handleClick}>
                        <a className="card__detail">Number of Colors: {num_colors}</a>
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
                <button className="deleteButton" onClick={handleDelete} >Remove from My Gallery</button>
            </div>
        </li>
    );
}
export default MyPainting;