import React from 'react'
import { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from 'react-router-dom';
const backend_url = import.meta.env.VITE_BACKEND_URL;

export const Register = () => {
    const [register, setRegister] = useState({
        email: "",
        password: ""
    })

    return (
        <div className='mt-2 d-flex flex-column w-75 justify-content-around mx-auto'>
            <div className="mb-3 text-start">
                <h5 className="form-h3" style={{ color: "Grey" }}>E-mail</h5>
                <input type="email"
                    value={register.email}
                    onChange={(e) => setRegister({ ...register, email: e.target.value })}
                    className="form-control text-center"
                    placeholder="Escribe tu email aqui" />
            </div>
            <div className="mb-3 text-start">
                <h5 className="form-h3" style={{ color: "Grey" }}>Contraseña</h5>
                <input type="password"
                    value={register.password}
                    onChange={(e) => setRegister({ ...register, password: e.target.value })}
                    className="form-control text-center"
                    placeholder="Escribe tu password aqui" />
            </div>
            <div className='d-grid fw-bold'>
                <button type="button"
                    className="btn text-white mt-3"
                    style={{ backgroundColor: '#6C11D9' }}
                    onClick={null}
                >Registrarse</button>
            </div>
        </div>
    )
}