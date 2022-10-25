import "./style.css";

function InputLogin() {
  return (
    <div className="form-login">
      <input id="email-login" name="email-login" placeholder="E-mail" type="email" />
      <input id="password-login" name="password-login" placeholder="Senha " type="password" />
    </div>
  )
}

export default InputLogin;