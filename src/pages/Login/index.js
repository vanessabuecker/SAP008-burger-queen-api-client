import { React } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import Input from "../../components/Input/Input";
import Button from "../../components/Button";
import { doLogin } from "../../Authentication/Auth";
import { emailValidation, passwordValidation } from "../../Authentication/Auth";
import { Error } from "../Error/error";
import { MessageError } from "../../components/MessageError";
import './style.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const buttonEnter = (e) => {
        e.preventDefault();

        doLogin(email, password)
            .then((res) => {
                if (res.code >= 400) {
                    const codeError = JSON.parse(res.code);
                    setErro(Error(codeError));
                }

                // else if (res.code === 400) {
                //     const codeError = JSON.parse(res.code);
                //     setErro(Error(codeError));
                    
                // }

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
            alert('Digite um e-mail válido.')
        }
        if (!passwordValidation(password)) {
            console.log('Digite uma senha válida.')
        }
    };

    return (<>
        <Nav />
        <div className="container-getstart">
            <form className="form-login" onSubmit={buttonEnter}>
                <Input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <MessageError 
                  disable={erro ? false: true}
                  message={erro}
                  />
                <div className="button-login-div">
                    <Button onClick={validate} id="button-login" text={'Entrar'} />
                </div>
            </form>
        </div>
    </>
    )
}

export default Login;