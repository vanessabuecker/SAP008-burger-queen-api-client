import React from "react";
import './HomePage.css';
import Coffee from "../components/coffee";
import Burguer from "../components/burguer";

function HomePage() {
    return (

        <div>
            <div className="caixa">Café da manhã 
                <Coffee />
            </div>
            <div className="outros">Outros
                <Burguer />
            </div>
        </div>
        
    )
}

export default HomePage;