import Logo from "./Logo"

function Nav() {
    return (
        <div className="container-login">
            <div className="box-logo">
                <Logo />
            </div>

            <div className="text-links">
                <a className="login-register" href='/login'>Login</a>
                <a className="createaccount-register" href='/register'>Criar conta</a>
            </div>
        </div>
    )
}

export default Nav;