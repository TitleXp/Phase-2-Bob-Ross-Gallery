import Painting from "./Painting";

function PaintingsContainer({paintings, setPaintings, handleAddPainting}) {
 
   const  mapPaintings= paintings.map(painting => (
 <Painting key={painting.id}
 painting={painting}
 setPaintings={setPaintings}
 handleAddPainting={handleAddPainting}
 />))
  return (
    <ul className="cards">
      {mapPaintings}
    </ul>
  );
}

export default PaintingsContainer;
