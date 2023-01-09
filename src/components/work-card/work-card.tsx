import React from "react";
import { Link } from "react-router-dom";
import { convertTagToRoute } from "../../utils/convert-route-tag";

const WorkCard = ({id, imgLink, text, title, author, tag}) => {
  const link = `/list/${convertTagToRoute(tag)}`;
  const linkAuthor = `/list/art/${author}`;
  return (
    <div className="card" style={{width: '18rem'}}>
      {imgLink && (
        <img src={`/assets/image/${imgLink}`} className="card-img-top" alt="img1"/>
      )}
      {text && (
        <p style={{
          height: '280px',
          overflow: 'hidden',
          padding: '10px'
        }}>{text}</p>
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Автор: <Link to={linkAuthor} className="card-link">{author}</Link></p>
        <p className="card-text">Категория: <Link to={link} className="card-link">{tag}</Link></p>
        <Link to={`/work/${id}`} className="btn w-100 btn-outline-primary">
          Перейти
        </Link>
      </div>
    </div>
  )
}

export default WorkCard;
