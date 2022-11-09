import React, { useEffect, useState } from "react";
import { token } from "../../Authentication/Token";
import MenuItems from "../../components/Menu/MenuItems";
import Menu from "../../components/Menu/Menu";
import Input from "../../components/Input/Input";
import './style.css'
import CommandCard from "../../components/CommandCard/CommandCard";

function Hall() {

    const baseUrl = 'https://lab-api-bq.herokuapp.com';
    const apiProducts = `${baseUrl}/products/`
    const getOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token("token"),
        },
    };

    const fetchAllProducts = async () => (
        fetch(apiProducts, getOptions)
            .then((res) => res.json())
            .then((data) => {
                return data;
            })
    )

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchAllProducts()
            .then((products) => setProducts(products))
    })

    const [client, setClient] = useState();

    function addName() {
        
    }

    return (
        <>
            <Menu />
            <div className="input-background">
                <Input onChange={e => setClient(e.target.value)} type="text" placeholder="nome do cliente" />
                <button id="button-input" onClick={addName}>OK</button>
            </div>

            <div className="test">
                <CommandCard name={client} text={'Enviar Cozinha'}/>
                <div className="background-menu">
                    {products.map(product => MenuItems(product))}
                    <MenuItems />
                </div>
            </div>
        </>
    )
}

export default Hall;
