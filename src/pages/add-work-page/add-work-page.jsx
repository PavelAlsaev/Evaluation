import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../services/auth";
import { convertRouteTag } from "../../utils/convert-route-tag";
import { useNavigate } from 'react-router-dom';

const COMIX_TYPE = '.png, .jpg, .jpeg';
const TEXT_TYPE = '.txt';

const AddWorkPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("comix");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState('');
  const [image, setImage] = useState({});

  const [errorTitle, setErrorTitle] = useState(false);

  const loadFile = (e) => {
    const reader = new FileReader()
    if (mode === 'text') {
      reader.onload = (e) => { 
        const text = (e.target.result)
        setText(text)
      };
      reader.readAsText(e.target.files[0])
    } else {
      setImage(e.target.files[0])
    }
  }

  const submit = async () => {
    const Autor = auth.getUserName();
    const date = new Date()
    const uploadDate = `${`0${(date.getDate())}`.slice(-2)}.${`0${(date.getMonth() + 1)}`.slice(-2)}.${date.getFullYear().toString().slice(-2)}`

    if (name === '') {
      setErrorTitle(true);
      return;
    }

    const tag = convertRouteTag(mode)
    const data = {
      tag, 
      name, 
      description,
      countLikes: 0,
      Autor,
      uploadDate
    }
    if (mode === 'text') {
      data.text = text
      await fetch('http://localhost:3000/works', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } else {
      const formData = new FormData();
      formData.append('file', image);
      const d = await fetch('http://localhost:3000/works/image', {
        method: 'POST',
        body: formData, 
      });
      const dataImage = await d.json();
      const name = dataImage.name;
      data.image = name;
      await fetch('http://localhost:3000/works', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }

    navigate('/');
  }

  return (
    <div className="container">
      <div className="row text-center">
        <h2 className="mt-3">Добавление работы</h2>
        <div className="input-group mt-4 w-50 mx-auto d-flex align-items-center">
          <span className="mx-4">Название</span>
          <input 
            type="text" 
            className={`form-control ${errorTitle ? 'is-invalid' : ''}`} 
            placeholder="Название" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <h3 className="mt-3">Категория</h3>
          <div
            className="btn-group w-50"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              value="comix"
              checked={mode === "comix"}
              onChange={(e) => setMode(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Комиксы
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              value="art"
              checked={mode === "art"}
              onChange={(e) => setMode(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Арты
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              value="text"
              checked={mode === "text"}
              onChange={(e) => setMode(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Тексты
            </label>
          </div>
          <div className="mb-3 mt-3 w-50 mx-auto">
            <label htmlFor="formFile" className="form-label">
              <h4>Загрузить файл</h4>
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile" 
              placeholder="Айла"
              onChange={loadFile}
              accept={mode === 'text' ? TEXT_TYPE : COMIX_TYPE}
            />
          </div>
          <div className="text-start mx-auto w-50 mt-3">
            <label htmlFor="floatingTextarea2">
              <h4>Описание работы</h4>
            </label>
            <textarea
              className="form-control mt-2"
              placeholder="Введите описание"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-4">
            <button className="btn btn-primary" onClick={() => submit()}>Добавить</button>
            <button className="btn btn-danger mx-3">
              <Link to="/" className="text-white text-decoration-none">Отмена</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorkPage;
