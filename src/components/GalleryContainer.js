import Painting from "./Painting";

function GalleryContainer(gallery) {
    const mappedPaintings = gallery.map(painting=> <Painting key= {painting.id} painting={painting} />);


return(
    <div>
     <h2>My Gallery</h2>
      {mappedPaintings}
    </div>
)
}
export default GalleryContainer;