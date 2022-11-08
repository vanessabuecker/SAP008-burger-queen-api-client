
function CommandCard(props) {

    return (
        <div className="command-client">
            <p>Comanda</p>
            <div className="command-list">
                Cliente: <span> {props.name} </span>
            </div>
        </div>
    )
}

export default CommandCard;