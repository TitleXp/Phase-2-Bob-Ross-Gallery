import Painting from "./Painting";

function PaintingsContainer({paintings, setPaintings, setMyPaintings}) {
   const  mapPaintings= paintings.map(painting => (
 <Painting key={painting.id}
 painting={painting}
 setPaintings={setPaintings}
 setMyPaintings={setMyPaintings}
 />))
  return (
    <ul className="cards">
      {mapPaintings}
    </ul>
  );
}
export default PaintingsContainer;
