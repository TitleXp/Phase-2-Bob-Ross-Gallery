import MyPainting from "./MyPainting";

function MyPaintingsContainer({ setPaintings, myPaintings, setMyPaintings}) {
    console.log(myPaintings)
   const  mapMyPaintings= myPaintings.map(painting => (

 <MyPainting key={painting.id}
 setPaintings={setPaintings}
 mypainting={painting}
 setMyPaintings={setMyPaintings}
 />))
  return (
    <ul className="cards">
      {mapMyPaintings}
    </ul>
  );
}

export default MyPaintingsContainer;
