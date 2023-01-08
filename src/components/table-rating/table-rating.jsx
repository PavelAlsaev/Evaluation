import React from "react";
//import Table from "react-bootstrap/Table";

const TableRating = ({works}) => {
    works.sort((a,b)=>b.countLikes-a.countLikes)
    
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Название</th>
            <th scope="col">Автор</th>
            <th scope="col">Кол-во лайков</th>
          </tr>
        </thead>
        <tbody>
        {works.slice(0,10).map((work,index) => (
            <tr key={work.id}>
            <th scope="row">{index + 1}</th>
            <td>{work.name}</td>
            <td>{work.Autor}</td>
            <td>
              <span className="badge bg-primary rounded-pill">{work.countLikes}</span>
            </td>
            </tr>
        ))}
        </tbody>
      </table>
    )
};

export default TableRating;
