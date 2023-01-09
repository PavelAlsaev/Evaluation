import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WorkList from '../../components/work-list/work-list';
import { convertRouteTag } from '../../utils/convert-route-tag';
import './main-page.css';

const MainPage = () => {
  const [items, setItems] = useState([]);
  const { tag, author } = useParams();
  const tagName = tag ? convertRouteTag(tag) : null;
  const authorName = author || null; 

  useEffect(() => {
    fetch('http://localhost:3000/works')
      .then(res => res.json())
      .then(result => {
          let works
          if (authorName) {
            works = authorName ? result.filter(w => w.Autor === authorName) : result;
          } else {
            works = tagName ? result.filter(w => w.tag === tagName) : result;
          }

          works.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
          setItems(works);
        },
      )
  }, [tag, authorName]);

  const worksByDateMap = items.reduce((acc, work) => {
    acc[work.uploadDate] = acc[work.uploadDate] || [];
    acc[work.uploadDate].push(work);
    return acc;
  }, {});
  
  return (
    <main>
      {Object.keys(worksByDateMap).map(date => (
        <WorkList
          key={date}
          date={date}
          items={worksByDateMap[date]}
        />
      ))}
    </main>
  )
}

export default MainPage;