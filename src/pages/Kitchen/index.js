import Menu from "../../components/Menu/Menu";
import CommandCard from "../../components/CommandCard/CommandCard";
import './style.css'


function Kitchen(){
    function ready (){
        return alert("Pedido Pronto!")

    }
    return(
        <>
        <Menu text={'Cozinha'}/>
        <div className="command">
            <CommandCard text={'Pronto'} onClick={ready}/>
            <CommandCard text={'Pronto'} onClick={ready}/>
            <CommandCard text={'Pronto'} onClick={ready}/>
            <CommandCard text={'Pronto'} onClick={ready}/>
            <CommandCard text={'Pronto'} onClick={ready}/>
            <CommandCard text={'Pronto'} onClick={ready}/>
        </div>
        
        </>
    )
}

export default Kitchen;