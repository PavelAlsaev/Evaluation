import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TableRating from "../../components/table-rating/table-rating";
import { convertRouteTag } from "../../utils/convert-route-tag";

const RatingPage = () => {
  const [items, setItems] = useState([]);
  const { tag } = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/works')
      .then(res => res.json())
      .then(result => {
          setItems(result);
        },
      )
  }, [])

  const nameTag = convertRouteTag(tag)
  return (
    <div className='container text-center'>
      <h2 className='mt-3'>Рейтинг работ: {nameTag}</h2>
      <TableRating
        works={items.filter(work => work.tag === nameTag)}
      />
    </div>
  );
};

export default RatingPage;
