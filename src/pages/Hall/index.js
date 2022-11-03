import React, { useEffect, useState } from "react";
import { token } from "../../Authentication/Token";
import MenuItems from "../../components/Menu/MenuItems";
import './style.css'

function Hall() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token("token"),
            },
        })
            .then(response => response.json())
            .then(data => {
                setDatas(data)
                console.log(data)
            })
    }, [])

    return (
        datas.map(repo => {

            return (
                <MenuItems name={repo.name} price={repo.price} flavor={repo.flavor} />

            )
        })
    )
}

export default Hall;