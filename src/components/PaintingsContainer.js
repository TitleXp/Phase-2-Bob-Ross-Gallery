import Painting from "./Planeteer";

function PaintingsContainer({paintings}) {
   const  mapPaintings= paintings.map(painting => (
 <Painting key={painting.id}
 painting={painting}
 />))
  return (
    <ul className="cards">
      {mapPaintings}
    </ul>
  );
}

export default PaintingsContainer;
