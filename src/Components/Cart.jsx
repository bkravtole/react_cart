import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';





const Cart = () => {
const dispatch = useDispatch();

  const increment =(id)=>{
  
    dispatch({
      type:"addTocartss",
      payload : {id}})
      dispatch({ type :"calculatePrice" })
      
  };
  const decrement =(id)=>{
    dispatch({
      type:"decrement",
      payload : id})
      dispatch({ type :"calculatePrice" })
  }
  
  const deletehandler =(id)=>{
    dispatch({
      type:"deleteFromCart",
      payload : id})
      dispatch({ type :"calculatePrice" })
     }

const {cartitemS,subTotal ,tax ,shipping ,total} = useSelector(state=>state.CART)

  return (
    <div className='cart'>
      <main>
        {
            cartitemS.length > 0 ? (
          cartitemS.map(i=>(
              <CartItems
              imgsrc={i.imgsrc} 
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              id={i.id}
              key = {i.id}
              decrement ={decrement}
              increment={increment}
              deletehandler={deletehandler}
            />
        
            ))
          ) : <h1>No Cart available</h1>
             
         
        }
      </main>

      <aside>
        <h2>subtotal : ${subTotal}</h2>
        <h2>shipping : ${shipping}</h2>
        <h2>Tax : ${tax}</h2>
        <h2>Total : ${total}</h2>
      </aside>
    </div>
  )
}


const CartItems = ({

  imgsrc,
  name,
  price,
  quantity,
  decrement,
  increment,
  deletehandler,
  id,
}) => (
  <div className='cartitems'>
    <img src={imgsrc} alt="item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deletehandler(id)} />
  </div>
)

export default Cart
