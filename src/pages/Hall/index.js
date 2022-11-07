import React, { useEffect, useState } from "react";
import { token } from "../../Authentication/Token";
import MenuItems from "../../components/Menu/MenuItems";
import Menu from "../../components/Menu/Menu";
import './style.css'

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

    return (
        <>
            <Menu />
            <div className="background-menu">
            {products.map(product => MenuItems(product))}
            </div>
        </>
    )
}

export default Hall;
