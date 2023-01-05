import { useState } from "react";
import PaintingContainer from "./PaintingsContainer";
import Gallery from "./Gallery"

function MainContainer({paintings ,setPaintings}) {
    const [gallery, setGallery] = useState([])

const handleAddPainting = (paintingToAdd) => {
    const storedPainting = gallery.find(element => element.id === paintingToAdd.id)
    if (!storedPainting) {
        setGallery(currentPortfolio => [...currentPortfolio, paintingToAdd])
    }
  }

  const handleRemovePainting = (paintingToRemove) => {
    setGallery(currentGallery => currentGallery.filter(element => element.id !== paintingToRemove.id))
  }


  return (
    <div>     
        <div className="paintings">
          <PaintingContainer paintings={ paintings } handleAddPainting={ handleAddPainting } setPaintings={ setPaintings }/>
        </div>
        <div className="gallery">
          <Gallery gallery={ gallery } handleRemovePainting={ handleRemovePainting }/>
        </div>
    </div>
   
  );
}

export default MainContainer;