import React from 'react'
import { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from 'react-router-dom';
const backend_url = import.meta.env.VITE_BACKEND_URL;

export const Login = () => {
  const navigate = useNavigate()
  const { dispatch } = useGlobalReducer()
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const checkLogin = () => {
  };

  return (
    <div>
      <div className="mb-4 text-start fs-6">
        <h5 htmlFor="exampleInputEmail1" className="form-label" style={{ color: "Grey" }}>E-mail</h5>
        <input type="email"
          placeholder='Introduce tu email aqui'
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          className="form-control text-center"
          id="exampleInputEmail1"
          aria-describedby="emailHelp" />
      </div>
      <div className="mb-1 text-start fs-6">
        <h5 htmlFor="exampleInputPassword1" className="form-label" style={{ color: "Grey" }}>Contraseña</h5>
        <input type="password"
          placeholder='Introduce tu contraseña aqui'
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          className="form-control text-center"
          id="exampleInputPassword1" />
        <div className='d-grid fw-bold'>
          <button type="button"
            className="btn text-white mt-3"
            style={{ backgroundColor: '#6C11D9' }}
            onClick={checkLogin}
          >Iniciar Sesion</button>
        </div>
      </div>
    </div>
  )
}