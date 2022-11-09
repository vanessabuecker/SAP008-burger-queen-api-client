import './Menu.css'
import logo from '../../imgs/logo.png'

function Menu(props) {

    return (
        <div className="menu-name">
            <p id='menu-title'> {props.text} </p>
            <img id='logo-menu' src={logo} alt="Logo Mommy's Burger"></img>
        </div>
    )
}

export default Menu;