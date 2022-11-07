import React from "react";
import './HomePage.css';
import Coffee from "../components/coffee";
import Burguer from "../components/burguer";

function HomePage() {
    const handleClick = () => {
        window.open('/hall', '_self')
    }

    return (

        <div className="box-homepage">
            <div className="box-coffeebreak" onClick={handleClick}>Café da manhã
                <Coffee />
            </div>

            <div className="anothers">Outros
                <Burguer />
            </div>
        </div>
    )



}
export default HomePage;