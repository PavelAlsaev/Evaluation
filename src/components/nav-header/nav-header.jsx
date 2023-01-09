import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import auth from '../../services/auth';

const NavHeader = () => {
  const [show, setShow] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isAuth, setIsAuth] = useState(auth.isLogin());

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleModal = () => {
    setIsRegister(!isRegister);
  }

  const submit = async () => {
    if (isRegister) {
      if (login.length === 0 || login.password === 0) {
        setError(true)
        return
      }
      await auth.register(login, password);
      setShow(false);
      setIsAuth(true);
    } else {
      const isAuth = await auth.login(login, password);
      if (isAuth) {
        setShow(false);
        setIsAuth(true);
      }
      else {
        setError(true);
      }
    }
  }

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
            <Button 
              variant={isAuth ? 'danger' : 'light'}
              className="mt-3" 
              onClick={!isAuth ? handleShow : () => {auth.logon(); setIsAuth(false)}}>
              {isAuth ? 'Выйти' : 'Войти'}
            </Button>
            {/* <!-- Модальное окно --> */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{!isRegister ? 'Авторизация' : 'Регистрация'}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                 <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Логин"
                    className={error ? 'is-invalid' : ''}
                    aria-label="Логин"
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    type='password'
                    className={error ? 'is-invalid' : ''}
                    placeholder="Пароль"
                    aria-label="Пароль"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </InputGroup>
                <Button variant="link" onClick={toggleModal}>
                  {!isRegister ? 'Авторизация' : 'Регистрация'}
                </Button> 
              </Modal.Body>
              <Modal.Footer>
               
                <Button variant="secondary" onClick={handleClose}>
                  Закрыть
                </Button>
                <Button variant="primary" onClick={submit}>
                  {!isRegister ? 'Войти' : 'Зарегистрироваться'}
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
