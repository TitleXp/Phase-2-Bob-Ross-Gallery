import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MyPainting({setPaintings, mypainting, setMyPaintings }) {

    const { id } = useParams()
    const [showStats, setShowStats] = useState(true)   
    const [paint, setPaint] = useState(null)
    const [gallery, setGallery] =useState({})
    // const liClass = !gallery ? "" : "in-gallery"
// console.log(mypainting)
    // const [oldPaintings, setOldPaintings] =useState({
        
    //     "painting_index": mypainting.painting_index,
    //     "img_src": mypainting.img_src,
    //     "painting_title": mypainting.painting_title,
    //     "season": mypainting.season,
    //     "episode": mypainting.episode,
    //     "num_colors": mypainting.num_colors,
    //     "youtube_src": mypainting.youtube_src,
    //     "colors": mypainting.colors,
    //     "color_hex": mypainting.color_hex,
    //     "Black_Gesso": mypainting.Black_Gesso,
    //     "Bright_Red": mypainting.Bright_Red,
    //     "Burnt_Umber": mypainting.Burnt_Umber,
    //     "Cadmium_Yellow": mypainting.Cadmium_Yellow,
    //     "Dark_Sienna": mypainting.Dark_Sienna,
    //     "Indian_Red": mypainting.Indian_Red,
    //     "Indian_Yellow": mypainting.Indian_Yellow,
    //     "Liquid_Black": mypainting.Liquid_Black,
    //     "Liquid_Clear": mypainting.Liquid_Clear,
    //     "Midnight_Black": mypainting.Midnight_Black,
    //     "Phthalo_Blue": mypainting.Phthalo_Blue,
    //     "Phthalo_Green": mypainting.Phthalo_Green,
    //     "Prussian_Blue": mypainting.Prussian_Blue,
    //     "Sap_Green": mypainting.Sap_Green,
    //     "Titanium_White": mypainting.Titanium_White,
    //     "Van_Dyke_Brown": mypainting.Van_Dyke_Brown,
    //     "Yellow_Ochre": mypainting.Yellow_Ochre,
    //     "Alizarin_Crimson": mypainting.Alizarin_Crimson
    //   })

    // useEffect(() => {
    //     if (!mypainting) {
    //         fetch(`http://localhost:3000/gallery/${id}`)
    //             .then(resp => resp.json())
    //             .then(paintingObj => setPaint(paintingObj))
    //             .catch(err => alert(err))
    //     }
    // }, [mypainting, id]);

    // const finalPainting = !paint ? mypainting : paint
    // //   console.log(finalPainting)

    // if (!finalPainting) {
    //     return <h3>Loading...</h3>
    // }


    // const addToGallery = (e) => {
    //     setGallery(currentGal => !currentGal)
    //     if (!gallery) {

    //         setGallery(currentGal => [...currentGal, { id, painting_title, img_src }])
    //     }

    //     else { setGallery(currentGal => currentGal.filter(item => item.id !== id)) }

    // }


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

        // setOldPaintings({
        //     "painting_index": "",
        //     "img_src": "",
        //     "painting_title": "",
        //     "season": "",
        //     "episode": "",
        //     "num_colors": "",
        //     "youtube_src": "",
        //     "colors": "",
        //     "color_hex": "",
        //     "Black_Gesso": "",
        //     "Bright_Red": "",
        //     "Burnt_Umber": "",
        //     "Cadmium_Yellow": "",
        //     "Dark_Sienna": "",
        //     "Indian_Red": "",
        //     "Indian_Yellow": "",
        //     "Liquid_Black": "",
        //     "Liquid_Clear": "",
        //     "Midnight_Black": "",
        //     "Phthalo_Blue": "",
        //     "Phthalo_Green": "",
        //     "Prussian_Blue": "",
        //     "Sap_Green": "",
        //     "Titanium_White": "",
        //     "Van_Dyke_Brown": "",
        //     "Yellow_Ochre": "",
        //     "Alizarin_Crimson": ""
            
        // })

       

        fetch(`http://localhost:3000/gallery/${mypainting.id}`,
            {
                method: "DELETE"
            })
        setMyPaintings(currentPaintings => currentPaintings.filter(element => element.id !== mypainting.id))
    }

    // const handleChange = (e) => {
    //     setOldPaintings({...oldPaintings, [e.target.name]: e.target.value})
    // }
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
                <button className="deleteButton" onClick={handleDelete} >Sell Painting</button>
                {/* <button className="favoriteButton" onClick={addToGallery}>Add To Gallery</button> */}
            </div>
        </li>
    );
}
export default MyPainting;