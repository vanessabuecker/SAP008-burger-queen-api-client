import { React } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { doLogin } from "../../Authentication/Auth";
import { emailValidation, passwordValidation } from "../../Authentication/Auth";
import './style.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const buttonEnter = (e) => {
        e.preventDefault();

        doLogin(email, password)
            .then((res) => {
                if (res.code === 404) {
                    alert("Usuário não encontrado");
                }

                else if (res.code === 400) {
                    alert("E-mail ou senha inválidos");
                }

                else {
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

    const validate = () => {
        if (!emailValidation(email)) {
            alert('Digite um email válido.')
        }
        if (!passwordValidation(password)) {
            console.log('Digite uma senha válida.')
        }
    };

    return (<>
        <Nav />
        <div className="container-getstart">
            <form className="form-login" onSubmit={buttonEnter}>
                <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="button-login-div">
                    <button onClick={validate} className="button-style" id="button-login">Entrar</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default Login;