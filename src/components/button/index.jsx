function Button({ type, text, onClick, value, className, id }) {
	return (
		<button type={type} onClick={onClick} className={className} id={id} value={value}>{text}</button>
	);
}

export default Button;