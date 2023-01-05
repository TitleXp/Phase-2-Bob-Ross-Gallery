import Painting from "./Painting";


function Gallery({handleRemovePainting, gallery}) {
    const mappedGallery = gallery.map(painting=> <Painting key= {painting.id} painting={painting} handleClick={handleRemovePainting}/>);


return(
    <div>
     <h2>My Gallery</h2>
      {mappedGallery}
    </div>
)
}
export default Gallery;