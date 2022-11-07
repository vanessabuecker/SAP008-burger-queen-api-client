import './Menu.css'
import logo from '../../imgs/logo.png'

function Menu() {

    return (
        <div className="menu-name">
            <p id='menu-title'> Cardápio  </p>
            <img id='logo-menu' src={logo} alt="Logo Mommy's Burger"></img>
        </div>
    )
}

export default Menu;