import React from "react";
import './style.css'
import Button from "../../components/Button";
import Logo from "../../components/Logo";

function Start() {

  function goToLogin() {
    window.open('/login', "_self")
  }
  return (
    <div className="box-getstart">
      <Logo />
      <div className="container-getstart">
        <Button onClick={goToLogin} text={'Começar'} />
      </div>
    </div>
  )
}

export default Start;