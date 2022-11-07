function MenuItems(props) {

    return (
        <div className="container">
            <div className="menu">
                <dl>
                    <dt>{props.name}</dt>
                    <dd className="price">Valor: <span id="price">${props.price},00</span> </dd>
                    <dd className="ingredients">{props.flavor}</dd>
                    <dd className="ingredients" >
                        <div className="imgApi">
                            <img className="imgApi" src={props.image} alt={props.name} />
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default MenuItems;