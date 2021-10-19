import { useReducer } from 'react';
import Ctx from './CartStore'
import FireBaseData from "./FireBaseData";

const deafualtState = {
    inCart:[],
    TotalAmount:0,
}


const mangeStates = (state , action)=>{

    if(action.type === "ADD"){

        const updatedTotalAmount = state.TotalAmount + action.item.price * action.item.amount;
       
        const existingCartItemIndex = state.inCart.findIndex(
            (item) => item.id == action.item.id
          );       
          const existingCartItem = state.inCart[existingCartItemIndex];
          let updatedItems;

          if (existingCartItem) {
            state.inCart.concat(action.item)
            const updatedItem = {
              ...existingCartItem,
              amount: action.amountInput +  existingCartItem.amount,
            };

        //    console.log(action.amountInput,"updatedItem");

        updatedItems = [...state.inCart];
        updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.inCart.concat(action.item);
          }

          
        // console.log(existingCartItemIndex , "existingCartItemIndex");            
        // console.log(state.inCart);
        return {
            inCart:updatedItems,
            TotalAmount:updatedTotalAmount
        }
    }

    if(action.type === "REM"){
        const REMcopy = action.itemRemove
        const updatedTotalAmount = state.TotalAmount - REMcopy.price;

        let updatedItems;
        if(REMcopy.amount > 1){
            const updatedItem = { ...REMcopy, amount: REMcopy.amount - 1 };
            const expectationItem = state.inCart.filter(item => item.id !== action.itemRemove.id);
            updatedItems = [updatedItem,...expectationItem]
        }
        if(REMcopy.amount === 1){
            updatedItems = state.inCart.filter(item => item.id !== action.itemRemove.id);
        } 
        return {
            inCart:updatedItems,
            TotalAmount:updatedTotalAmount
        }
    }

   
    return deafualtState;
}

const CartProvider = (props)=>{
    
const data = FireBaseData()
const [states , dispatchStates] = useReducer(mangeStates , deafualtState);








const addToCartHandler = (enteredAmountNumber , filterdItem) => {
    dispatchStates({type:"ADD" , item:filterdItem , amountInput:enteredAmountNumber})
}

const removeHandler = (itemRemove) => {

dispatchStates({type:"REM" , itemRemove:itemRemove})

}

// console.log(states , "after modification");

    const cartContext = {
        inCart:states.inCart,
        TotalAmount:states.TotalAmount,

        add: addToCartHandler,
        remove:removeHandler,

        CartData:data,
        addToContext: data => {},

    }

    // console.log(cartContext ,"From CaetProvider L 22");
        console.log(cartContext.inCart ,"cartContext");


    return (
    <Ctx.Provider value={cartContext}>
    {props.children}
    </Ctx.Provider>
    )
}

export default CartProvider