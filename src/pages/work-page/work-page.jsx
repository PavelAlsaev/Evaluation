import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

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
    <>
      <h1 className="text-center">{work.name}</h1>
      <img className="text-center" src={'/assets/image/' + work.image} />
    </>
  )
}

export default WorkPage;