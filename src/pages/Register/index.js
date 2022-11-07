import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createNewUser } from "../../Authentication/Auth";
import Nav from "../../components/Nav";
import { emailValidation, passwordValidation } from "../../Authentication/Auth";

import './style.css'

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const buttonSubmit = (e) => {
        e.preventDefault();

        createNewUser(name, email, password, role)
            .then((res) => {
                if (res.code === 403) {
                    alert("Email já cadastrado!");
                } else {
                    localStorage.setItem("token", res.token);
                    localStorage.setItem("id", res.id);
                    localStorage.setItem("email", res.email);
                    localStorage.setItem("role", res.role);

                    if (res.role === "hall") {
                        navigate("/homepage");
                    }

                    else if (res.role === "kitchen") {
                        navigate("/kitchen");
                    }
                }
            })
            .catch((errors) => errors);

    };

    const validation = () => {
        if (!emailValidation(email)) {
            alert('Digite um e-mail válido.')
        }
        if (!passwordValidation(password)) {
            alert('Digite uma senha válida')
        }
    };

    return (<>
        <Nav />
        <div className="box-getstart">
            <div className="container-getstart">
                <form className="form" onSubmit={buttonSubmit}>
                    <div className="radio">
                        <input type="radio" name="role" value="kitchen" id="kitchen" className="role" onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="kitchen">Cozinha</label>
                        <input type="radio" name="role" value="hall" id="hall" className="role" onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="hall">Atendimento</label>
                    </div>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={validation} className="button-style" id="button-register">Criar conta</button>
                </form>
            </div>
        </div>
    </>
    )
}

export default Register;