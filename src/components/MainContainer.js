import { useState } from "react";
import PaintingContainer from "./PaintingsContainer";
import Gallery from "./Gallery"

function MainContainer(paintings ,setPaintings) {
    const [gallery, setGallery] = useState([])

const handleAddPainting = (paintingToAdd) => {
    const storedPainting = gallery.find(stock => stock.id === paintingToAdd.id)
    if (!storedPainting) {
        setGallery(currentPortfolio => [...currentPortfolio, paintingToAdd])
    }
  }

  const handleRemovePainting = (paintingToRemove) => {
    setGallery(currentGallery => currentGallery.filter(stock => stock.id !== paintingToRemove.id))
  }


  return (
    <div>     
        <div className="col-8">
          <PaintingContainer Paintings={paintings} handleAddStock={handleAddPainting} setPaintings={setPaintings}/>
        </div>
        <div className="col-4">
          <Gallery gallery={gallery} handleRemoveStock={ handleRemovePainting }/>
        </div>
    </div>
   
  );
}

export default MainContainer;