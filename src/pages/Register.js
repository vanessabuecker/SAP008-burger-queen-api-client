import React from "react";
import Logo from "../components/Logo";
import Form from "../components/input/Form";

function Register() {

    function goToHomePage() {
        window.open('/initial-page', "_self")
    }

    return (

        <div className="container-login">
            <div className="box-logo">
                <Logo />
            </div>
            <div className="text-links">
                <a href='/login'>Login</a>
                <a href='/register'>Criar conta</a>
            </div>

            <div className="box-getstart">
                <div className="container-getstart">
                    <Form page='register' pathLink='/register' />
                    <button className="button-style" onClick={goToHomePage}>Criar Conta</button>
                </div>
            </div>
        </div>
    )
}

export default Register;