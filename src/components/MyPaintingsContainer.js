import MyPainting from "./Painting";

function MyPaintingsContainer({myPaintings, setMyPaintings}) {
   const  mapMyPaintings= myPaintings.map(painting => (
 <MyPainting key={painting.id}
 painting={painting}
 setPaintings={setMyPaintings}
 />))
  return (
    <ul className="cards">
      {mapMyPaintings}
    </ul>
  );
}

export default MyPaintingsContainer;
