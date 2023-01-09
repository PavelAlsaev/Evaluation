import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import LikeButton from "../../components/like-button/like-button";

const WorkPage = () => {
  let { id } = useParams();
  const [work, setWork] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:3000/works/${id}`)
    .then(res => res.json())
    .then(result => {
        setWork(result);
      },
    )
  }, [id]);

  return (
    <div className="text-center container">
      <h1 className="mt-3">{work.name}</h1>
      {work.image && (
        <img src={'/assets/image/' + work.image} />
      )}
      {work.text && (
        <p className="w-50 text-start mx-auto">{work.text}</p>
      )}
      <div className="w-50 mx-auto">
        <div className="mt-3 d-flex justify-content-between">
          <p>Тип работы: {work.tag}</p>
          <p>Автор: {work.Autor}</p>
          <LikeButton count={work.countLikes}/>
        </div>
        <div className="text-start">
          <h2 className="fw-normal fs-3">Описание работы</h2>
          <p className="p-1" style={{background: '#E5E5E5'}}>
            {work.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WorkPage;