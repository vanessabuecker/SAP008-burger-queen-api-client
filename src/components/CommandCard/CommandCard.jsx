
function CommandCard(props) {

    return (
        <div className="command-client">
            <p>Comanda</p>
            <div className="command-list">
                Cliente: <span> {props.name} </span>
            </div>
            <button className="add-button" onClick={props.onClick}> {props.text} </button>
        </div>
    )
}

export default CommandCard;