import Input from "./Input";
import "./style.css";

function Form({ page, nameValue, onChange, onSubmit, emailValue,  passwordValue}) {
  const locationPage = page === "register"

  return (
    <form className='form' onSubmit={onSubmit} page={page}>
      {locationPage &&
        <>
          <Input className='form-input'  type='text' placeholder='Nome' value={nameValue} onChange={onChange} />
          <Input className='form-input'  type='email' placeholder='E-mail' value={emailValue} onChange={onChange} />
          <Input className='form-input'  type='password' placeholder='Senha' value={passwordValue} onChange={onChange} />
          <div className="radio-div">
          <label className='radio-button'>
            <Input type='radio' id='radiobutton' value='att' name='att' onChange={onChange} /> Salão
          </label>
          <label className='radio-button'>
            <Input type='radio' id='radiobutton' value='kitchen' name='att' onChange={onChange} />Cozinha
          </label>
          </div>
        </>
      }

    </form>
  )
}

export default Form;