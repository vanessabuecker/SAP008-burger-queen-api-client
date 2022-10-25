import React from "react";
import './Home.css'
import Logo from "../components/Logo";

function Home() {

  function goToLogin() {
    window.open('/login', "_self")
  }
  return (
    <div className="box-getstart">
      <Logo />
      <div className="container-getstart">
        <button className="button-style" onClick={goToLogin}>Começar</button>
      </div>
    </div>
  )
}

export default Home;