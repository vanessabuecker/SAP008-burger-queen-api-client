function MenuItems(props) {

    return (
        <div className="container">
            <div className="menu">
                <dl>
                    <dt>{props.name}</dt>
                    <dd className="price">Valor: ${props.price},00</dd>
                    <dd className="ingredients">{props.flavor}</dd>
                </dl>
            </div>
        </div>
    )
}

export default MenuItems;