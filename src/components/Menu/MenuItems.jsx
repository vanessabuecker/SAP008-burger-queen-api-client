function MenuItems(props) {

    return (
        <div className="container">
            <div className="menu">
                <dl>
                    <dt>{props.name}</dt>
                    <dd className="price">Valor: <span id="price">${props.price},00</span> </dd>
                    <dd className="ingredients">{props.flavor}</dd>
                    <dd className="ingredients">
                    </dd>
                </dl>
                <div className="div-imgApi">
                    <img className="imgApi" src={props.image} alt={props.name} />
                    <button className="add-button" onClick={props.onClick}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default MenuItems;