import React from "react";
import WorkCard from "../work-card/work-card";

const WorkList = ({ items, date }) => {
  return (
    <>
      <div className="data mt-3" style={{textAlign: 'center'}}>
        <h4>Последнее обновление { date }</h4>
      </div>

      {/* <!--страница--> */}
      <div className="ground mt-3">
        {items.map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            imgLink={work.image}
            text={work.text}
            title={work.name}
            author={work.Autor}
            tag={work.tag}
          />
        ))}
      </div>
    </>
  )
}

export default WorkList;