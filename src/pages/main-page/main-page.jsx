import * as React from 'react';
import { useState, useEffect } from 'react';
import WorkCard from '../../components/work-card/work-card';
import './main-page.css';

const MainPage = () => {
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
    <>
      <div className="data mt-3" style={{textAlign: 'center'}}>
        <h4>Последнее обновление 19.10.22</h4>
      </div>

      {/* <!--страница--> */}
      <main className="ground mt-3">
        {items.map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            imgLink={work.image}
            title={work.name}
            author={work.Autor}
            tag={work.tag}
          />
        ))}
    </main>
    </>
  )
}

export default MainPage;