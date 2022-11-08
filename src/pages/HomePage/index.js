import React from "react";
import './style.css';
import coffee from '../../imgs/coffee.png'
import burger from "../../imgs/burguer.png"

function HomePage() {
    const handleClick = () => {
        window.open('/hall', '_self')
    }

    return (

        <div className="box-homepage">
            <div className="box-coffeebreak" onClick={handleClick}>Café da manhã
                <img src={coffee} className="img-homepage" alt="Imagem de uma xícará de café" />
            </div>

            <div className="anothers">Outros
                <img src={burger} className="img-homepage" alt="Imagem de um hambúrguer" />
            </div>
        </div>
    )
}

export default HomePage;