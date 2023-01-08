import React from "react";
import { useState, useEffect } from "react";
import TableRating from "../../components/table-rating/table-rating";

const RatingPageComix = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/works')
      .then(res => res.json())
      .then(result => {
          setItems(result);
        },
      )
  }, [])

  return (
    <div className='container text-center'>
      <h2 className='mt-3'>Рейтинг работ: Комикс</h2>
      <TableRating
      works={items.filter(work=>work.tag === 'Комикс')}
      />
    </div>
  );
};

export default RatingPageComix;
