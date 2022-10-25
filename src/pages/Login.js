import { React } from "react";
import Logo from "../components/Logo";
import InputLogin from "../components/input/InputLogin";
import './Login.css'

function Login() {
    
    function goToHomePage() {
        window.open('/initial-page', "_self")
    }

    return (
        <div className="container-login">
            <div className="box-logo">
                <Logo />
            </div>
            <div className="text-links">
                <a className="login" href='/login'>Login</a>
                <a className="criar" href='/register'>Criar conta</a>
            </div>

            <InputLogin />

            <div className="box-getstart">
                <div className="container-getstart">
                    <button className="button-style" onClick={goToHomePage}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Login;