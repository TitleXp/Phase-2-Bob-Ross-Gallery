import Painting from "./Painting";

function PaintingsContainer({paintings, setPaintings}) {
   const  mapPaintings= paintings.map(painting => (
 <Painting key={painting.id}
 painting={painting}
 setPaintings={setPaintings}
 />))
  return (
    <ul className="cards">
      {mapPaintings}
    </ul>
  );
}

export default PaintingsContainer;
