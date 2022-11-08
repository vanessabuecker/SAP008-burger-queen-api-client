function Input(props) {

    return (
        <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange} id={props.id} />
    )
}

export default Input;