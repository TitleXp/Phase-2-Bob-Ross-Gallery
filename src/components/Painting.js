import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Painting ({ painting, setPaintings }) {
    
    const { id }=useParams()
    const [showStats, setShowStats] = useState(true)
    const [favorite, setFavorite] =useState(false)
    const [paint, setPaint]= useState(null)
    const liClass= !favorite? "": "in-gallery"

    useEffect(() => {
        if (!painting) {
          fetch(`http://localhost:3000/paintings/${id}`)
          .then(resp => resp.json())
          .then(paintingObj => setPaint(paintingObj))
          .catch(err => alert(err))
        }
      }, [painting, id]);

      const finalPainting = !paint ? painting : paint
      console.log(finalPainting)
      console.log(id)
      
      if (!finalPainting) {
        return <h3>Loading...</h3>
      }

      
    const addToFavorite = (e)=>{
        setFavorite(currentFav => !currentFav)
        if (!favorite) {
            setFavorite(currentFav => [...currentFav,{ id, painting_title, img_src}])
        } 
        
        else{setFavorite(currentFav => currentFav.filter(item => item.id !== id))}
       
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


    

    const { colors, num_colors, painting_title, img_src, youtube_src, season, episode } = finalPainting
    return (
<li className="cards__item">
    <div className="card" >
            
        <div className="card__title" >{painting_title}</div>
            {showStats ? (<img className="card__image" src={img_src} alt={painting_title} onClick={handleClick}/>) : (
                <div onClick={handleClick}>
            <a className="card__detail">Number of Colors: {num_colors}</a>
            <a className="card__detail">Colors: {colors} </a>       
                </div>
            )}

            <div className="card__content">
                <p><a href={youtube_src} className="card__title">
                    Season: {season} Episode:{episode}
                </a>
                </p>
            </div>
           <span> <button className="deleteButton" onClick={handleDelete}>Buy Painting</button>
            <button className="favoriteButton" onClick={addToFavorite}>Add To Gallery</button></span>
    </div>
</li>
    );
}
export default Painting;