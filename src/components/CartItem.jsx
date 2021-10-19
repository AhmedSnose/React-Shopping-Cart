import React , {useContext ,useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { Route , Switch ,Redirect ,Link } from 'react-router-dom';
import Cart from '../Pages/Cart';

import ctx from '../store/CartStore'
import Input from '../UI/Input'
import classes from './Ducts.module.css'
import Navbar from './Navbar';

function CartItem(props) {

  const data = useContext(ctx)
  const {inCart , TotalAmount , remove ,add} = data
  const history = useHistory();

  useEffect(()=>{
    if(inCart.length === 0) history.push('/Shopping')
  },[inCart])
  
  const onRemove = (item) => remove(item)
  const added = (enteredAmountNumber , idItem)=> {
    console.log(enteredAmountNumber);
    add(enteredAmountNumber , idItem)}

  const [showDataItem , setShowDataItem] = useState()
  const Show = (dataShow)=>{
    setShowDataItem(dataShow)
}

const Tot = inCart.reduce((a,v)=>{
  return a + v.amount * v.price
},0)

console.log(Tot,"Tot");

    const data_Maping = inCart.map((item , i)=>(
        <li key={item.id} className={classes['cart-item']}>
            <div className={classes.summary}>
            <h2>{item.name}</h2> 

              <span className={classes.price}>${item.price}</span>
              <span className={classes.amount}>x {item.amount}</span>
            </div>
          <div className={classes.actions}>
            <button onClick={onRemove.bind(null,item)}>−</button>
            <button onClick={added.bind(null ,1,item)}>+</button>
            <button onClick={Show.bind(null,item)} style={{width:'120px'}}>

              <Link to={`/Shopping/CartItem/${item.name}`}> SHOW</Link></button>

          </div>
          <h2>price {item.amount * item.price}$</h2>
        </li>

    ))

        return <> 
            <Route path='/Shopping/CartItem/:id'>
              <Cart key={Math.random()} item={showDataItem}/>
            </Route>
            <Route path='/Shopping/CartItem' exact>
              {data_Maping} <h2>Total Price {Tot}$</h2>
            </Route>
    </>

      };
      
      export default CartItem;
