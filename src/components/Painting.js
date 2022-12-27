function Painting ({ painting }) {
    return (
<li className="cards__item">
      <div className="card">
        <img
          src={painting.img_src}
          alt={painting.painting_title}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{painting.painting_title}</div>
          <p className="card__text">Card Text</p>
          <div className="card__detail"></div> 
    </div>
    </div>
    
    


</li>
    );
}
export default Painting;