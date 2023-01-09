import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="main_het">
    <nav className="main_header">
        <Link to="/"><img className="log" src="/assets/image/logo.png"/></Link>
        <ul className="menu">
            <div className="dropdown open">
                <button className="btn dropdown-toggle mt-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Работы
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/">Все</Link>
                  <Link className="dropdown-item" to="/list/art">Арты</Link>
                  <Link className="dropdown-item" to="/list/text">Тексты</Link>
                  <Link className="dropdown-item" to="list/comix">Комиксы</Link>
                </div>
            </div>

            <div className="dropdown open">
                <button className="btn dropdown-toggle mt-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Рейтинг
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/rating/art">Арты</Link>
                  <Link className="dropdown-item" to="/rating/text">Тексты</Link>
                  <Link className="dropdown-item" to="/rating/comix">Комиксы</Link>
                </div>
            </div>

            <div>
                <Link to="/publish" type="button" className="btn mt-3" >Добавить работу</Link>
            </div>
            
            <div>
                {/* <!-- Кнопка-триггер модального окна --> */}
            <Button variant='light' className="mt-3" onClick={handleShow}>
              Войти
            </Button>
            {/* <!-- Модальное окно --> */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Авторизация</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                 <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Логин"
                    aria-label="Логин"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    type='password'
                    placeholder="Пароль"
                    aria-label="Пароль"
                  />
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Закрыть
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Войти
                </Button>
              </Modal.Footer>
            </Modal>
            </div>
        </ul>
    </nav>
</header>
  )
}

export default NavHeader;
