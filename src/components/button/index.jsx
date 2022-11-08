function Button({ type, text, onClick, value, className, id }) {
	return (
		<button className="button-style" type={type} onClick={onClick} id={id} value={value}>{text}</button>
	);
}

export default Button;