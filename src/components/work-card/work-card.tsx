import React from "react";
import { Link } from "react-router-dom";

const WorkCard = ({id, imgLink, title, author, tag}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={`/assets/image/${imgLink}`} className="card-img-top" alt="img1"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Автор: <a href="#" className="card-link">{author}</a></p>
        <p className="card-text">Категория: <a href="#" className="card-link">{tag}</a></p>
        <Link to={`/work/${id}`} className="btn w-100 btn-outline-primary">
          Перейти
        </Link>
      </div>
    </div>
  )
}

export default WorkCard;
