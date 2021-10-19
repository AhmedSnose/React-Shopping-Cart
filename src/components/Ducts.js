import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons'
import React , {useContext} from 'react'
import classes from './Ducts.module.css'
import ctx from '../store/CartStore'
import InputForm from './InputForm'

function Ducts({id}) {
    const data = useContext(ctx)
    const {CartData , add} = data

    const amount_idHandler = (enteredAmountNumber , idItem)=>{
    console.log("runing");
    const filterdItem = CartData[id.cliked].filter(item => item.id == +idItem )
        add(enteredAmountNumber , {
            id:filterdItem[0].id,
            name:filterdItem[0].name,
            price:filterdItem[0].price,
            url:filterdItem[0].url,
            amount:enteredAmountNumber
        })
    }


    const data_Maping = CartData[id.cliked].map((item)=>(
        <div key={item.id} className={classes.card}>
            <h3>{item.name}</h3>
            <img src={item.url}/>
            <h5>${item.price}</h5>
            <div>
            <InputForm onAddToCart={amount_idHandler} id={item.id}/>
            </div>
        </div>
        
    ))

    return (
        <>
       {/* <div className={classes.container}> */}
           {data_Maping}
           {/* <CartItem amount_idHandler={amount_idHandler}/> */}
       {/* </div> */}
        </>

    )
}

export default Ducts
